import React from 'react';
import {FlatList, Text} from 'react-native';
import produtores from '../../../mocks/produtores';
import Produtor from '../Produtor';
import Topo from '../Topo';
import styles from './styles';

const Produtores = () => {
  const TopoLista = () => (
    <>
      <Topo />
      <Text style={styles.titulo}>Produtores</Text>
    </>
  );

  return (
    <FlatList
      data={produtores.lista}
      renderItem={({item}) => <Produtor {...item} />}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
    />
  );
};

export default Produtores;
