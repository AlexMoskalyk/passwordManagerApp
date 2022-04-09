import React, { useEffect, useState } from 'react';
import IRecord from '../interfaces/Data.interface';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import DashboradPage from '../pages/DashboradPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';

import NotFoundPage from '../pages/NotFoundPage';
import { useAuth } from '../hook/useAuth';
import { Container } from '@mui/material';
import Navbar from './navbar/Navbar';

const initialState: { records: IRecord[]; showPassword: boolean } = {
  records: [],
  showPassword: false,
};

const App = () => {
  const [state, setState] = useState(initialState);
  const user = useAuth().user;

  useEffect(() => {
    axios
      .get(
        `https://passwordmanagerapp-c6114-default-rtdb.firebaseio.com/dataList.json`,
      )
      .then(res => {
        const keys = Object.keys(res.data);
        const records = keys.map(key => ({ id: key, ...res.data[key] }));
        setState(prev => ({
          showPassword: prev.showPassword,
          records: records,
        }));
      });
  }, []);

  const togglePassword = () => {
    setState(prev => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const deleteDataItem = (id: string) => {
    axios
      .delete(
        `https://passwordmanagerapp-c6114-default-rtdb.firebaseio.com/dataList/${id}.json`,
      )
      .then(() => {
        setState(prev => ({
          showPassword: prev.showPassword,
          records: prev.records.filter(record => record.id !== id),
        }));
      });
  };

  const addDataItem = (record: IRecord) => {
    setState(prev => ({ ...prev, records: [...prev.records, record] }));
  };

  return (
    <>
      <Navbar />
      <Container fixed>
        <Routes>
          {user && (
            <Route
              path="/dashboard"
              element={
                <DashboradPage
                  togglePassword={togglePassword}
                  records={state.records}
                  deleteDataItem={deleteDataItem}
                  addDataItem={addDataItem}
                  showPassword={state.showPassword}
                />
              }
            />
          )}

          <Route path="/" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
