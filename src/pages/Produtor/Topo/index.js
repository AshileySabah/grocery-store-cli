import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native';

import Texto from '../Texto';

import gradiente from '../../../assets/gradiente.svg';
import topo from '../../../assets/topo.png';
import voltarSVG from '../../../assets/voltar.svg';

import {styles as stylesFunction} from './styles';

const ALTURA_PADRAO = 270;

export default function Topo({titulo, imagem = topo, altura = ALTURA_PADRAO}) {
  const navigation = useNavigation();
  const styles = stylesFunction(altura);

  return (
    <>
      <Image source={imagem} style={styles.topo} />
      <Image source={gradiente} style={styles.gradiente} />

      <Texto style={styles.titulo}>{titulo}</Texto>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.botaoVoltar}>
        <Image source={voltarSVG} style={styles.voltar} />
      </TouchableOpacity>
    </>
  );
}
