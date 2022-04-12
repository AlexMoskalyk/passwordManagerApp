import React from 'react';
import IRecords from '../../interfaces/Data.interface';
import Modal from '../modal/Modal';
import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
import DataItem from './dataItem/DataItem';
import EditForm from '../editForm/EditForm';

interface Props {
  records: IRecords[];
  showPassword: boolean;
  updateItem: (id: string, record: IRecords) => void;
  deleteDataItem: (id: string) => void;
}

const DataList = ({
  records,
  showPassword,
  deleteDataItem,
  updateItem,
}: Props) => {
  return (
    <>
      <Grid container spacing={3}>
        {records.map(record => (
          <DataItem
            updateItem={updateItem}
            key={record.id}
            record={record}
            showPassword={showPassword}
            deleteDataItem={deleteDataItem}
          />
        ))}
      </Grid>
    </>
  );
};

export default DataList;
