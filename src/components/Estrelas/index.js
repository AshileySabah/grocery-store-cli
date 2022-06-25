import React, {useState} from 'react';
import {View} from 'react-native';
import Estrela from '../Estrela';
import styles from './styles';

const Estrelas = ({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) => {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Estrela
          key={i}
          aoPressionar={() => setQuantidade(i + 1)}
          desabilitada={!editavel}
          preenchida={i < quantidade}
          grande={grande}
        />,
      );
    }

    return listaEstrelas;
  };

  return (
    <View style={styles.estrelas}>
      <RenderEstrelas />
    </View>
  );
};

export default Estrelas;
