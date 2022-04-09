import axios from 'axios';
import React, { useState } from 'react';
import IRecords from '../../interfaces/Data.interface';
import './DataItemEditor.css';
import { Button, TextField } from '@mui/material';

interface Props {
  records: IRecords[];
  addDataItem: (record: IRecords) => void;
  togglePassword: () => void;
}

const initialState = {
  title: '',
  login: '',
  password: '',
};

const DataItemEditor = ({ addDataItem, records, togglePassword }: Props) => {
  const [state, setState] = useState({ ...initialState });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(
        `https://passwordmanagerapp-c6114-default-rtdb.firebaseio.com/dataList.json`,
        state,
      )
      .then(res => {
        addDataItem({ ...state, id: res.data.name });
        reset();
      });
  };

  const reset = () => {
    setState(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        variant="standard"
        type="text"
        name="title"
        label="Title"
        value={state.title}
        onChange={onChange}
      />

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

      <Button
        type="submit"
        disabled={!(state.title && state.login && state.password)}
      >
        Create
      </Button>
      {records.length !== 0 && (
        <Button type="button" onClick={togglePassword}>
          show password
        </Button>
      )}
    </form>
  );
};

export default DataItemEditor;
