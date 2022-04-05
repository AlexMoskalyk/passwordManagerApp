import React, { useState } from 'react';
import IData from '../../interfaces/Data.interface';

interface Props {
  data: IData[];
  deleteDataItem: (dataId: string) => void;
}

const DataList = ({ data, deleteDataItem }: Props) => {
  const [dataItem, setDataItem] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const getItemId = (dataId: string) => {
    data.find(item => item.id === dataId ?? setShowPassword(true));
  };

  return (
    <ul>
      {data.map(({ id, title, login, password }) => (
        <li key={id}>
          <p>
            <span>Title:</span>
            {title}
          </p>
          <p>
            <span>Login:</span>
            {login}
          </p>
          <div>
            <p>
              <span>Password:</span>
              {showPassword ? password : '**********'}
            </p>
            <button type="button">Show password</button>
          </div>
          <button type="button" onClick={() => deleteDataItem(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DataList;
