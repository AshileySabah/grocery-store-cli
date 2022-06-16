import React, {useMemo, useReducer} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Estrelas from '../../../components/Estrelas';
import styles from './styles';

const Produtor = ({nome, imagem, distancia, estrelas}) => {
  const [selecionado, toogleSelecionado] = useReducer(value => !value, false);

  const distanciaEmMetros = useMemo(() => {
    return `${distancia}m`;
  }, [distancia]);

  return (
    <TouchableOpacity style={styles.cartao} onPress={toogleSelecionado}>
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
        <Text style={styles.distancia}>{distanciaEmMetros}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Produtor;
