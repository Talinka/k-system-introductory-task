import React from 'react';
import List from '@material-ui/core/List';
// components
import UserItem from './UserItem';
// types
import User from '../types/User';
// styles
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  list: {
    width: 'fit-content',
  }
});

type UserListProps = {
  users: Array<User>,
  onClick: (user: User) => void;
}

const UserList = ({ users, onClick }: UserListProps) => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {users.map((user) => <UserItem user={user} key={user.id} onClick={onClick}/>)}
    </List>
  );
}

export default UserList;