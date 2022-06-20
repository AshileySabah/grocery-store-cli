import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Texto from '../Texto';
import styles from './styles';

const Cesta = ({detalhes, itens, produtor}) => {
  const navigation = useNavigation();
  const {nome, imagem, descricao, preco} = detalhes;

  return (
    <TouchableOpacity style={styles.cesta} onPress={() => null}>
      <View style={styles.conteudo}>
        <Image source={imagem} style={styles.imagem} />

        <View style={styles.textos}>
          <Texto style={styles.nome}>{nome}</Texto>
          <Texto style={styles.descricao}>{descricao}</Texto>
          <Texto style={styles.preco}>{preco}</Texto>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cesta;
