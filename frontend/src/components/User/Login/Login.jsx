import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';

import './Login.css';

const baseUrl = 'http://localhost:3001/users'

function initialState() {
  return {email: '', password: ''};
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [statusMsg, setStatusMsg] = useState(false);

  useEffect(() => {
    axios(baseUrl).then(resp => {
        setUsers(resp.data);
    })

    setToken('');
    setStatusMsg("hidden");
  },[])
  
  function login({ email, password }) {
    let loginSucess = false;

    users.map((user) => {
        if (email === user.email && password === user.password) return loginSucess = true;
    });

    if (loginSucess)
    {
      return { token: '1234' } 
    } else {
      setStatusMsg('visible')
    }
  
    return { error: 'Usuário ou senha inválida'}
  }

  function onChange(e) {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    })
  }

  function onSubmit(e) {
    e.preventDefault();

    const { token } = login(values)

    if (token) {
      setToken(token);
      return history.push('/')
    }

    setValues(initialState);
  }


  function onChangeRegistration(e) {
    e.preventDefault();
      return history.push('/registration')
  }

  return (
    <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form autoComplete="nope" onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" autoComplete="off" onChange={onChange} value={values.email} placeholder="Usuário"/>
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" onChange={onChange} value={values.password} placeholder="Senha"/>
        </div>
        <label htmlFor="" style={{visibility: statusMsg, fontSize: '0.8rem', color: 'red'}}>Usuário ou senha inválida</label>

        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>

        
       
      </form>

      <div>
      <span>Não tem uma conta?  <a href="/registration">Registre-se</a></span>
      </div>
    </div>
  );
};

export default UserLogin;
