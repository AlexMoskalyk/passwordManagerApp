import React, { useEffect, useState } from 'react';
import IRecord from '../interfaces/Data.interface';
import axios from 'axios';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboradPage from '../pages/DashboradPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import { useNavigate } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import { useAuth } from '../hook/useAuth';
import { Container } from '@mui/material';
import Navbar from './navbar/Navbar';

const initialState: { records: IRecord[]; showPassword: boolean } = {
  records: [],
  showPassword: false,
};

const App = () => {
  const [records, setRecords] = useState<IRecord[]>([]);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const user = useAuth().user;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://passwordmanagerapp-c6114-default-rtdb.firebaseio.com/dataList.json`,
      )
      .then(res => {
        const keys = Object.keys(res.data);
        const records = keys.map(key => ({ id: key, ...res.data[key] }));
        setRecords(records);
      });
  }, []);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const deleteDataItem = (id: string) => {
    axios
      .delete(
        `https://passwordmanagerapp-c6114-default-rtdb.firebaseio.com/dataList/${id}.json`,
      )
      .then(() => {
        setRecords(records.filter(record => record.id !== id));
      });
  };

  const addDataItem = (record: IRecord) => {
    setRecords([...records, record]);
  };

  const updateItem = (id: string, updateRecord: IRecord) => {
    setRecords(
      records.map(record => (record.id === id ? updateRecord : record)),
    );
  };
  return (
    <>
      <Navbar />
      <Container fixed>
        <Routes>
          <Route
            path="/dashboard"
            element={
              user ? (
                <DashboradPage
                  updateItem={updateItem}
                  togglePassword={togglePassword}
                  records={records}
                  deleteDataItem={deleteDataItem}
                  addDataItem={addDataItem}
                  showPassword={showPassword}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route path="/" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
