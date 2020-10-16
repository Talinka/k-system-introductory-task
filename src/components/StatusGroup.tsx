import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// types
import UserStatus from '../types/UserStatus';

type StatusGroupProps = {
  status: UserStatus;
  onStatusChange: (status: UserStatus) => void,
};

const statusLabels: Array<string> = [
  'New',
  'Verified',
  'VIP',
];

const StatusGroup = ({ status, onStatusChange }: StatusGroupProps) => {
  const [selectedStatus, setStatus] = useState(String(status));

  const handleChange = (e: React.ChangeEvent<{}>, value: string) => {
    setStatus(value);
    onStatusChange(Number(value));
  };

  return (
    <FormControl>
      <RadioGroup row aria-label="status" name="status"
        value={selectedStatus.toString()}
        onChange={handleChange}
      >
        {statusLabels.map((status, i) => (
          <FormControlLabel key={i} value={i.toString()} control={<Radio />} label={status} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default StatusGroup;
