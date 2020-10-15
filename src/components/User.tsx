import React from 'react';
import UserStatus from '../types/UserStatus';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// icons
import NewUserIcon from '@material-ui/icons/FiberNewOutlined';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUserOutlined';
import VIPUserIcon from '@material-ui/icons/EmojiEventsOutlined';

type UserProps = {
  name: string,
  status: UserStatus,
}

const statusIcons = {
  [UserStatus.new]: <NewUserIcon />,
  [UserStatus.verified]: <VerifiedUserIcon />,
  [UserStatus.VIP]: <VIPUserIcon />,
}

function User({ name, status }: UserProps) {
  return (
    <ListItem button>
      <ListItemIcon>
        {statusIcons[status]}
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
}

export default User;