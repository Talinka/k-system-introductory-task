import React from 'react';
import UserStatus from '../types/UserStatus';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// icons
import NewUserIcon from '@material-ui/icons/FiberNewOutlined';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUserOutlined';
import VIPUserIcon from '@material-ui/icons/EmojiEventsOutlined';
// types
import User from '../types/User';

type UserProps = {
  user: User;
}

const statusIcons = {
  [UserStatus.New]: <NewUserIcon />,
  [UserStatus.Verified]: <VerifiedUserIcon />,
  [UserStatus.VIP]: <VIPUserIcon />,
}

function UserItem({ user }: UserProps) {
  const { name, status } = user;
  return (
    <ListItem button>
      <ListItemIcon>
        {statusIcons[status]}
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
}

export default UserItem;