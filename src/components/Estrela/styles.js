import {StyleSheet} from 'react-native';

const stylesFunction = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });

export default stylesFunction;
