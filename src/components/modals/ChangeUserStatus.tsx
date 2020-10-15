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
};

const statuses = {
  new: UserStatus.New,
  verified: UserStatus.Verified,
  vip: UserStatus.Verified,
};

const ChangeUserStatus = ({ user, open }: ChangeUserStatusProps) => {
  const { name, status } = user;
  const [newStatus, setStatus] = useState(status.toString());
  const handleClose = () => { };
  const handleChange = (e: React.ChangeEvent<{}>, value: string) => {
    setStatus(value);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Change user status</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Select status for user ${name}:`}
        </DialogContentText>
        <FormControl component={"fieldset" as "div"}>
          <RadioGroup row aria-label="status" name="status" value={newStatus} onChange={handleChange}>
            {Object.keys(statuses)
              .map((key) => (
                <FormControlLabel
                  value={key}
                  control={<Radio />}
                  label="New"
                />
              ))
            }
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ChangeUserStatus;
