import {StyleSheet} from 'react-native';

export const styles = grande =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
    },
  });
