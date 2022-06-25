import React from 'react';
import {FlatList, View} from 'react-native';
import Texto from '../../componentes/Texto';
import Topo from '../../componentes/Topo';
import useTextos from '../../hooks/useTextos';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import styles from './styles';

const Cesta = ({detalhes, itens, produtor}) => {
  const {topoCesta, tituloItens} = useTextos();

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
