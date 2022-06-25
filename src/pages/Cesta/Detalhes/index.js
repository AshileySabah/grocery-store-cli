import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import useTextos from '../../../hooks/useTextos';
import Texto from '../../../components/Texto';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Detalhes = ({nome, produtor, descricao, preco}) => {
  const {botaoComprar} = useTextos();
  const navigation = useNavigation();

  return (
    <>
      <Texto style={styles.nome}>{nome}</Texto>
      <View style={styles.fazenda}>
        <Image source={produtor.imagem} style={styles.imagemFazenda} />
        <Texto style={styles.nomeFazenda}>{produtor.nome}</Texto>
      </View>
      <Texto style={styles.descricao}>{descricao}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>

      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          navigation.navigate('HomeScreen', {
            compra: {nome, timestamp: new Date().valueOf()},
          })
        }>
        <Texto style={styles.textoBotao}>{botaoComprar}</Texto>
      </TouchableOpacity>
    </>
  );
};

export default Detalhes;
