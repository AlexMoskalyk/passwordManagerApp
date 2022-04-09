import React, { ReactChildren, ReactChild } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

interface IProps {
  children: ReactChildren | ReactChild;
  path: string;
}

const PublicRoute = ({ children, path }: IProps) => {
  //   const user = useAuth();
  return <></>;
};

export default PublicRoute;
