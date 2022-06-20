import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import styles from './styles';
import Topo from './Topo';
import Cesta from './Cesta';
import topoImage from '../../assets/produtores/topo.png';
import topo from '../../mocks/topo';

const Produtor = () => {
  const route = useRoute();
  const {nome, imagem, cestas} = route.params;

  const TopoLista = () => {
    return (
      <>
        <Topo titulo={topo.tituloProdutor} imagem={topoImage} altura={200} />
        <View style={styles.conteudo}>
          <View style={styles.logo}>
            <Image source={imagem} style={styles.produtorImage} />
            <Text style={styles.produtor}>{nome}</Text>
          </View>

          <Text style={styles.cestas}>{topo.tituloCestas}</Text>
        </View>
      </>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={TopoLista}
      data={cestas}
      renderItem={({item}) => <Cesta {...item} produtor={{nome, imagem}} />}
      style={styles.lista}
    />
  );
};

export default Produtor;
