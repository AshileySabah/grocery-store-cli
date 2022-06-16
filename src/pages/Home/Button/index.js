import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({children, onPress}) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
