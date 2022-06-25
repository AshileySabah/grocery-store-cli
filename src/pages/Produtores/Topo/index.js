import React from 'react';
import {View, Text, Image} from 'react-native';
import logo from '../../../assets/logo.png';
import useTextos from '../../../hooks/useTextos';
import styles from './styles';

const Topo = ({melhoresProdutores}) => {
  const {boasVindas, legenda, legendaMelhoresProdutores} = useTextos();

  return (
    <>
      <View style={styles.topo}>
        <Image source={logo} style={styles.imagem} />
        <Text style={styles.boasVindas}>
          {melhoresProdutores ? '' : boasVindas}
        </Text>
        <Text style={styles.legenda}>
          {melhoresProdutores ? legendaMelhoresProdutores : legenda}
        </Text>
      </View>
    </>
  );
};

export default Topo;
