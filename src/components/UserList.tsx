import React from 'react';
import List from '@material-ui/core/List';
// components
import UserItem from './UserItem';
// types
import User from '../types/User';

type UserListProps = {
  users: Array<User>,
  onClick: (user: User) => void;
}

const UserList = ({ users, onClick }: UserListProps) => {
  return (
    <List>
      {users.map((user) => <UserItem user={user} key={user.id} onClick={onClick}/>)}
    </List>
  );
}

export default UserList;