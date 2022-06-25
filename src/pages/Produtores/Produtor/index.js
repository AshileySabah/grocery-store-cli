import React, {useMemo} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Estrelas from '../../../components/Estrelas';
import styles from './styles';

const distanciaEmMetros = distancia => {
  return `${distancia}m`;
};

const Produtor = ({nome, imagem, distancia, estrelas, aoPressionar}) => {
  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia],
  );

  return (
    <TouchableOpacity style={styles.cartao} onPress={aoPressionar}>
      <Image source={imagem} style={styles.imagem} accessibilityLabel={nome} />
      <View style={styles.informacoes}>
        <View>
          <Text style={styles.nome}>{nome}</Text>
          <Estrelas quantidade={estrelas} />
        </View>
        <Text style={styles.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Produtor;
