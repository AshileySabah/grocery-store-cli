import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Image, TouchableOpacity} from 'react-native';
import Texto from '../../../components/Texto';
import styles from './styles';

const Cesta = ({detalhes, itens, produtor}) => {
  const navigation = useNavigation();
  const {nome, imagem, descricao, preco} = detalhes;

  return (
    <TouchableOpacity
      style={styles.cesta}
      onPress={() =>
        navigation.navigate('Cesta', {
          detalhes,
          itens,
          produtor,
        })
      }>
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
