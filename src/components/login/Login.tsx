import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../firebaseAuth/FirebaseAuth';
import './Login.css';
import { Button, TextField } from '@mui/material';
const initialState = {
  login: '',
  password: '',
};
const Login = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(state.login, state.password);
    } catch (error) {
      alert(error);
    }
    setState(initialState);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleLogin} className="form">
      <TextField
        variant="standard"
        type="text"
        name="login"
        label="Login"
        value={state.login}
        onChange={onChange}
      />

      <TextField
        variant="standard"
        type="password"
        name="password"
        label="Password"
        value={state.password}
        onChange={onChange}
      />

      <Button type="submit" disabled={!(state.login && state.password)}>
        Login
      </Button>
    </form>
  );
};

export default Login;
