import React, { useEffect, useState } from 'react';
import initialDataList from '../dataList.json';
import DataList from './dataList/DataList';
import IData from '../interfaces/Data.interface';
import DataItemEditor from './dataItemEditor/DataItemEditor';
import shortid from 'shortid';

const getInitialData = () => {
  const savedData = localStorage.getItem('data');
  return savedData ? JSON.parse(savedData) : [];
};

const App = () => {
  const [data, setData] = useState<IData[]>(getInitialData);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const deleteDataItem = (dataId: string) => {
    setData(data => data.filter(data => data.id !== dataId));
  };

  const addDataItem = (title: string, login: string, password: string) => {
    const dataItem = {
      id: shortid.generate(),
      title,
      login,
      password,
    };
    console.log(dataItem);
    setData(data => [dataItem, ...data]);
  };

  return (
    <>
      <DataItemEditor addDataItem={addDataItem} />
      <DataList data={data} deleteDataItem={deleteDataItem} />
    </>
  );
};

export default App;
