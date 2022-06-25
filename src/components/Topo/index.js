import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Dimensions, TouchableOpacity} from 'react-native';
import Texto from '../Texto';
import Gradiente from '../../assets/gradiente.svg';
import topo from '../../assets/topo.png';
import VoltarSVG from '../../assets/voltar.svg';
import stylesFunction from './styles';

const largura = Dimensions.get('screen').width;
const ALTURA_PADRAO = 270;

const Topo = ({titulo, imagem = topo, altura = ALTURA_PADRAO}) => {
  const navigation = useNavigation();
  const estilos = stylesFunction(altura);
  return (
    <>
      <Image source={imagem} style={estilos.topo} />
      <Gradiente
        width={largura}
        height={(130 / 360) * largura}
        style={estilos.gradiente}
      />
      <Texto style={estilos.titulo}>{titulo}</Texto>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={estilos.botaoVoltar}>
        <VoltarSVG color="white" style={estilos.voltar} />
      </TouchableOpacity>
    </>
  );
};

export default Topo;
