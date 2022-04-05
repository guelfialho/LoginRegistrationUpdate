import React, { useContext } from 'react';
import './Home.css';
import StoreContext from 'components/Store/Context';

const PagesHome = () => {  
  const { setToken } = useContext(StoreContext);

  return(
    <div className="pages-home">
      <p>Você acessou o menu principal da aplicação!</p>
      <button onClick={ () => {setToken('')}}>Sair</button>
    </div>
  )
};

export default PagesHome;
