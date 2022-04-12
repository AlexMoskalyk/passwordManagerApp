import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import './EditForm.css';
import IRecords from '../../interfaces/Data.interface';
import axios from 'axios';

interface IProps {
  record: IRecords;
  toggleModal: () => void;
  updateItem: (id:string,record: IRecords) => void;
}

const EditForm = ({ record, updateItem, toggleModal }: IProps) => {
  const [state, setState] = useState(record);

  const id = record.id;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandleCahnge = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put(
        `https://passwordmanagerapp-c6114-default-rtdb.firebaseio.com/dataList/${record.id}.json`,
        state,
      )
      .then(res => updateItem(id, res.data))
      .finally(toggleModal);
  };

  return (
    <form className="form__container" onSubmit={onHandleCahnge}>
      <TextField
        className="form__item"
        variant="standard"
        type="text"
        name="title"
        label="Title"
        value={state.title}
        onChange={onChange}
      />
      <TextField
        className="form__item"
        variant="standard"
        type="text"
        name="login"
        label="Login"
        value={state.login}
        onChange={onChange}
      />
      <TextField
        className="form__item"
        variant="standard"
        type="text"
        name="password"
        label="Password"
        value={state.password}
        onChange={onChange}
      />
      <Button type="submit">Save</Button>
    </form>
  );
};

export default EditForm;
