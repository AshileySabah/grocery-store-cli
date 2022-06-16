import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';

import {styles as stylesFunction} from './styles';

export default function Estrela({
  onPress,
  desabilitada = true,
  preenchida,
  grande = false,
}) {
  const styles = stylesFunction(grande);

  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitada}>
      <Image source={getImagem()} style={styles.estrela} />
    </TouchableOpacity>
  );
}
