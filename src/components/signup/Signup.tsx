import React, { useState } from 'react';
import { signup } from '../../firebaseAuth/FirebaseAuth';
import './Signup.css';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

const Signup = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signup(state.email, state.password);
    } catch (error) {
      alert(error);
    }
    setState(initialState);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSignup} className="form">
      <TextField
        variant="standard"
        type="text"
        name="email"
        label="email"
        value={state.email}
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

      <Button type="submit" disabled={!(state.email && state.password)}>
        Sign Up
      </Button>
    </form>
  );
};

export default Signup;
