import React, { ReactChildren, ReactChild } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

interface IProps {
  children: any;
}

const PrivateRoute = ({ children }: IProps) => {
  const user = useAuth().user;
  const navigate = useNavigate();
  if (!user) {
    console.log(user);
    navigate('/');
  }

  return children;
};

export default PrivateRoute;
