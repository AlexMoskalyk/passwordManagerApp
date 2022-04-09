import React from 'react';
import IRecords from '../../interfaces/Data.interface';
import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';

interface Props {
  records: IRecords[];
  showPassword: boolean;

  deleteDataItem: (id: string) => void;
}

const DataList = ({ records, showPassword, deleteDataItem }: Props) => {
  return (
    <Grid container spacing={3}>
      {records.map(({ id, title, login, password }) => (
        <Grid item key={id}>
          <Card sx={{ width: 350 }}>
            <CardContent>
              <Typography variant="h6">Title: {title}</Typography>
              <Typography variant="h6">Login: {login}</Typography>
              <Typography variant="h6">
                Password: {showPassword ? password : '**********'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button type="button" onClick={() => deleteDataItem(id)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DataList;
