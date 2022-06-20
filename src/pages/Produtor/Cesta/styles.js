import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cesta: {
    paddingHorizontal: 16,
  },
  conteudo: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
  },
  imagem: {
    width: 62,
    height: 62,
    borderRadius: 6,
  },
  textos: {
    flex: 1,
    marginLeft: 8,
  },
  nome: {
    color: '#464646',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 14,
    lineHeight: 22,
  },
  preco: {
    color: '#2A9F85',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    marginTop: 4,
  },
});

export default styles;
