import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import useTextos from '../../../hooks/useTextos';
import Texto from '../../../componentes/Texto';
import styles from './styles';

const Detalhes = ({nome, produtor, descricao, preco}) => {
  const {botaoComprar} = useTextos();

  return (
    <>
      <Texto style={styles.nome}>{nome}</Texto>
      <View style={styles.fazenda}>
        <Image source={produtor.imagem} style={styles.imagemFazenda} />
        <Texto style={styles.nomeFazenda}>{produtor.nome}</Texto>
      </View>
      <Texto style={styles.descricao}>{descricao}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>

      <TouchableOpacity style={styles.botao} onPress={() => {}}>
        <Texto style={styles.textoBotao}>{botaoComprar}</Texto>
      </TouchableOpacity>
    </>
  );
};

export default Detalhes;
