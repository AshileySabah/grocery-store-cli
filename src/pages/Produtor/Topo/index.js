import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity, Dimensions} from 'react-native';

import Texto from '../Texto';

import Gradiente from '../../../assets/gradiente.svg';
import topo from '../../../assets/topo.png';
import VoltarSVG from '../../../assets/voltar.svg';

import {styles as stylesFunction} from './styles';

const largura = Dimensions.get('screen').width;
const ALTURA_PADRAO = 270;

export default function Topo({titulo, imagem = topo, altura = ALTURA_PADRAO}) {
  const navigation = useNavigation();
  const styles = stylesFunction(altura);
  return (
    <>
      <Image source={imagem} style={styles.topo} />
      <Gradiente
        width={largura}
        height={(130 / 360) * largura}
        style={styles.gradiente}
      />
      <Texto style={styles.titulo}>{titulo}</Texto>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.botaoVoltar}>
        <VoltarSVG color="white" style={styles.voltar} />
      </TouchableOpacity>
    </>
  );
}
