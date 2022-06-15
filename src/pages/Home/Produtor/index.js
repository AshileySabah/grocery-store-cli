import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Estrelas from '../../../components/Estrelas';
import styles from './styles';

const Produtor = ({nome, imagem, distancia, estrelas}) => {
  const [selecionado, setSelecionado] = useState(false);

  return (
    <TouchableOpacity
      style={styles.cartao}
      onPress={() => setSelecionado(!selecionado)}>
      <Image style={styles.imagem} source={imagem} accessibilityLabel={nome} />
      <View style={styles.informacoes}>
        <View>
          <Text style={styles.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={styles.distancia}>{distancia}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Produtor;
