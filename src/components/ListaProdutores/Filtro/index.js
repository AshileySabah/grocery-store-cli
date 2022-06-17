import React from 'react';
import {View} from 'react-native';
import Button from '../../Button';
import styles from './styles';

const Filtro = ({lista, setLista}) => {
  const ordenar = propriedade => {
    const copyLista = lista.slice(0, lista.length);
    const newLista = copyLista.sort((a, b) => {
      return a[propriedade] < b[propriedade] ? -1 : 1;
    });

    if (JSON.stringify(lista) === JSON.stringify(newLista)) {
      setLista(newLista.reverse());
    } else {
      setLista(newLista);
    }
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => ordenar('nome')}>Nome</Button>
      <Button onPress={() => ordenar('distancia')}>Distância</Button>
      <Button onPress={() => ordenar('estrelas')}>Estrela</Button>
    </View>
  );
};

export default Filtro;
