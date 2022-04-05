import React, { useState } from 'react';

interface Props {
  addDataItem: (name: string, login: string, password: string) => void;
}

const DataItemEditor = ({ addDataItem }: Props) => {
  const [title, setTitle] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'title':
        setTitle(value);

        break;
      case 'login':
        setLogin(value);

        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addDataItem(title, login, password);
    setTitle('');
    setLogin('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={onChange}
        />
      </label>
      <label>
        <input
          type="text"
          name="login"
          placeholder="Login"
          value={login}
          onChange={onChange}
        />
      </label>
      <label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

export default DataItemEditor;
