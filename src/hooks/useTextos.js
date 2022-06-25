import {useState, useEffect} from 'react';
import {carregaTextos} from '../services/carregaDados';

const useTextos = () => {
  const [textos, setTextos] = useState({});

  useEffect(() => {
    const retorno = carregaTextos();
    setTextos(retorno);
  }, []);

  return textos;
};

export default useTextos;
