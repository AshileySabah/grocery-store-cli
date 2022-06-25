import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';
import stylesFunction from './styles';

const Estrela = ({
  aoPressionar,
  desabilitada = true,
  preenchida,
  grande = false,
}) => {
  const styles = stylesFunction(grande);

  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };

  return (
    <TouchableOpacity onPress={aoPressionar} disabled={desabilitada}>
      <Image source={getImagem()} style={styles.estrela} />
    </TouchableOpacity>
  );
};

export default Estrela;
