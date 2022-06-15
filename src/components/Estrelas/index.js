import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';
import {styles as stylesFunction} from './styles';

const Estrelas = ({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = true,
}) => {
  const styles = stylesFunction(grande);

  const [quantidade, setQuantidade] = useState(quantidadeAntiga);

  const getImage = i => {
    return i >= quantidade ? estrelaCinza : estrela;
  };

  const RenderEstrelas = () => {
    const listEstrelas = [];

    for (let i = 1; i <= 5; i++) {
      listEstrelas.push(
        <TouchableOpacity
          key={i}
          onPress={() => setQuantidade(i + 1)}
          // disabled={!editavel}
        >
          <Image style={styles.estrela} source={getImage(i)} />
        </TouchableOpacity>,
      );
    }

    return listEstrelas;
  };

  return (
    <View style={styles.container}>
      <RenderEstrelas />
    </View>
  );
};

export default Estrelas;
