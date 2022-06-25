import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, View} from 'react-native';
import Texto from '../../components/Texto';
import Topo from '../../components/Topo';
import useTextos from '../../hooks/useTextos';
import Detalhes from './Detalhes';
import Item from './Item';
import styles from './styles';

const Cesta = () => {
  const route = useRoute();
  const {topoCesta, tituloItens} = useTextos();
  const {detalhes, itens, produtor} = route.params;

  return (
    <>
      <FlatList
        data={itens}
        renderItem={Item}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo titulo={topoCesta} />
              <View style={styles.cesta}>
                <Detalhes {...detalhes} produtor={produtor} />
                <Texto style={styles.titulo}>{tituloItens}</Texto>
              </View>
            </>
          );
        }}
        style={styles.lista}
      />
    </>
  );
};

export default Cesta;
