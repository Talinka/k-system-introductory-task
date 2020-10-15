import React from 'react';
import List from '@material-ui/core/List';
// components
import UserItem from './UserItem';
//types
import User from '../types/User';

type UserListProps = {
  users: Array<User>,
}

const UserList = ({ users }: UserListProps) => {
  return (
    <List>
      {users.map((user) => <UserItem user={user} />)}
    </List>
  );
}

export default UserList;