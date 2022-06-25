import React from 'react';
import {useRoute} from '@react-navigation/native';
import useTextos from '../../hooks/useTextos';
import {FlatList, Text, View, Image} from 'react-native';
import Cesta from './Cesta';
import Topo from '../../components/Topo';
import topo from '../../assets/produtores/topo.png';
import styles from './styles';

const Produtor = () => {
  const route = useRoute();
  const {tituloProdutor, tituloCestas} = useTextos();
  const {nome, imagem, cestas} = route.params;

  const TopoLista = () => {
    return (
      <>
        <Topo titulo={tituloProdutor} imagem={topo} altura={150} />
        <View style={styles.conteudo}>
          <View style={styles.logo}>
            <Image source={imagem} style={styles.produtorImage} />
            <Text style={styles.produtor}>{nome}</Text>
          </View>

          <Text style={styles.cestas}>{tituloCestas}</Text>
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
