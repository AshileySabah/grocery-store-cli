import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Produtor from './Produtor';
import Topo from './Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import styles from './styles';

const Produtores = ({melhoresProdutores}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const nomeCompra = route.params?.compra.nome;
  const timestampCompra = route.params?.compra.timestamp;
  const [exibirMensagem, setExibirMensagem] = useState(false);

  const lista = useProdutores(melhoresProdutores);
  const {tituloProdutores, mensagemCompra} = useTextos();
  const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeCompra);

  useEffect(() => {
    setExibirMensagem(!!nomeCompra);

    let timeout;

    if (nomeCompra) {
      timeout = setTimeout(() => {
        setExibirMensagem(false);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [nomeCompra, timestampCompra]);

  const TopoLista = () => {
    return (
      <>
        <Topo melhoresProdutores={melhoresProdutores} />
        {exibirMensagem && (
          <Text style={styles.compra}>{mensagemCompleta}</Text>
        )}
        <Text style={styles.titulo}>{tituloProdutores}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({item}) => (
        <Produtor
          {...item}
          aoPressionar={() => {
            navigation.navigate('Produtor', item);
          }}
        />
      )}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
      style={styles.lista}
    />
  );
};

export default Produtores;
