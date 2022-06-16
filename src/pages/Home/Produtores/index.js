import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import produtores from '../../../mocks/produtores';
import Produtor from '../Produtor';
import Topo from '../Topo';
import styles from './styles';

const Produtores = () => {
  const [lista, setLista] = useState(produtores.lista);

  const ordenar = propriedade => {
    const copyLista = lista.slice(0, lista.length);
    const newLista = copyLista.sort((a, b) => {
      return a[propriedade] < b[propriedade] ? -1 : 1;
    });

    if (JSON.stringify(lista) === JSON.stringify(newLista)) {
      setLista(newLista.reverse());
    } else {
      setLista(newLista);
    }
  };

  const TopoLista = () => (
    <>
      <Topo />
      <Text style={styles.titulo}>Produtores</Text>
      <TouchableOpacity onPress={() => ordenar('nome')}>
        <Text>Ordenar por nome</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => ordenar('distancia')}>
        <Text>Ordenar por distância</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => ordenar('estrelas')}>
        <Text>Ordenar por estrelas</Text>
      </TouchableOpacity>
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

export default Produtores;
