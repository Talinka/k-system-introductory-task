import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// components
import StatusGroup from '../StatusGroup';
// types
import User from '../../types/User';
import UserStatus from '../../types/UserStatus';

type ChangeUserStatusProps = {
  user: User,
  open: boolean,
  currentStatus: UserStatus,
  onSubmit: (newStatus: UserStatus, isChanged: boolean) => void,
};

const ChangeUserStatus = ({ user, currentStatus, open, onSubmit }: ChangeUserStatusProps) => {
  let { name } = user;
  const [selectedStatus, setStatus] = useState(currentStatus);

  const handleSubmit = (isSaveChange: boolean) => () => {
    onSubmit(selectedStatus, isSaveChange);
  };

  const handleStatusChange = (status: UserStatus) => {
    setStatus(status);
  };

  return (
    <Dialog open={open} onClose={handleSubmit(false)} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Change user status</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Select status for user ${name}:`}
        </DialogContentText>
        <StatusGroup status={user.status} onStatusChange={handleStatusChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit(true)} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ChangeUserStatus;