import React, { useState } from 'react';
// import Modal from '../../modal/Modal';
import EditForm from '../../editForm/EditForm';
import {
  Modal,
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Box,
} from '@mui/material';
import IRecords from '../../../interfaces/Data.interface';
import './DataItem.css';

interface IProps {
  record: IRecords;
  showPassword: boolean;
  updateItem: (id: string, record: IRecords) => void;
  deleteDataItem: (id: string) => void;
}

const DataItem = ({
  record,
  showPassword,
  deleteDataItem,
  updateItem,
}: IProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <Grid item>
        <Card sx={{ width: 350 }}>
          <CardContent>
            <Typography variant="h6">Title: {record.title}</Typography>
            <Typography variant="h6">Login: {record.login}</Typography>
            <Typography variant="h6">
              Password: {showPassword ? record.password : '**********'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button type="button" onClick={() => deleteDataItem(record.id)}>
              Delete
            </Button>
            <Button type="button" onClick={toggleModal}>
              Edit
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Modal
        className="modal"
        open={open}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal__content">
          <EditForm
            record={record}
            updateItem={updateItem}
            toggleModal={toggleModal}
          />
        </Box>
      </Modal>
    </>
  );
};

export default DataItem;
