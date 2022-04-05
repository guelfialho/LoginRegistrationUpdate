import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';

import './Registration.css';

const baseUrl = 'http://localhost:3001/users'

function initialState() {
  return {email: '', password: ''};
}

const UserRegistration = () => {
    
  return (
    <div className="user-login">
      <h1 className="user-login__title">Registre-se no Sistema</h1>
      <form autoComplete="nope">
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" autoComplete="off"  placeholder="Usuário"/>
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" placeholder="Senha"/>
        </div>
        
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Criar Conta
        </UIButton>

        <div>
            <p> Já tem login? <a href="/login">Entre</a></p>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;