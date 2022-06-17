import React, {useState} from 'react';
import {FlatList, Text} from 'react-native';
import produtores from '../../../mocks/produtores';
import Produtor from '../Produtor';
import Filtro from '../Filtro';
import Topo from '../Topo';
import styles from './styles';

const ListaProdutores = ({melhoresProdutores = false}) => {
  const [lista, setLista] = useState(() => {
    const initialList = produtores.lista;

    if (melhoresProdutores) {
      return initialList.filter(item => {
        return item.estrelas >= 4;
      });
    } else {
      return initialList;
    }
  });

  const TopoLista = () => (
    <>
      <Topo />
      <Text style={styles.titulo}>Produtores</Text>
      <Filtro lista={lista} setLista={setLista} />
    </>
  );

  return (
    <FlatList
      data={lista}
      renderItem={({item}) => <Produtor {...item} />}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
    />
  );
};

export default ListaProdutores;
