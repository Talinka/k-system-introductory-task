import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// types
import User from '../../types/User';
import UserStatus from '../../types/UserStatus';

type ChangeUserStatusProps = {
  user: User,
  open: boolean,
  onSubmit: (newStatus: UserStatus | null) => void,
};

const statuses: Array<UserStatus> = [
  UserStatus.New,
  UserStatus.Verified,
  UserStatus.VIP,
];

const ChangeUserStatus = ({ user, open, onSubmit }: ChangeUserStatusProps) => {
  const { name, status: oldStatus } = user;
  const [statusText, setStatusText] = useState(oldStatus.toString());
  const handleSave = () => {
    const newStatus = statuses.find((status) => status.toString() === statusText);
    onSubmit(newStatus ?? null);
  };
  const handleCancel = () => onSubmit(null);

  const handleChange = (e: React.ChangeEvent<{}>, value: string) => {
    setStatusText(value);
  };

  return (
    <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Change user status</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Select status for user ${name}:`}
        </DialogContentText>
        <FormControl>
          <RadioGroup row aria-label="status" name="status" value={statusText} onChange={handleChange}>
            {statuses
              .map((status, i) => (
                <FormControlLabel
                  key={i}
                  value={status.toString()}
                  control={<Radio />}
                  label={status.toString()}
                />
              ))
            }
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ChangeUserStatus;