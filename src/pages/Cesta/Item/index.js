import React from 'react';
import {View, Image} from 'react-native';
import Texto from '../../../components/Texto';
import styles from './styles';

const Item = ({item: {nome, imagem}}) => {
  return (
    <View style={styles.item}>
      <Image source={imagem} style={styles.imagem} />
      <Texto style={styles.nome}>{nome}</Texto>
    </View>
  );
};

export default Item;
