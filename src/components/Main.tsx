import React, { useState } from 'react';

import UserList from './UserList';
import UserStatus from '../types/UserStatus';
import ChangeUserStatusModal from './modals/ChangeUserStatus';

import User from '../types/User';

type MainProps = {
  users: Array<User>,
}

const Main = ({ users }: MainProps) => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(users[0]);

  const changeStatusSubmit = (newStatus: UserStatus, isSaveChange: boolean) => {
    if (isSaveChange) {
      console.log(newStatus);
    }
    setOpen(false);
  }

  const handleShowDialog = (user: User) => {
    setSelectedUser(user);
    setOpen(true);
  }

  return (
    <div>
      <UserList users={users} onClick={handleShowDialog} />
      <ChangeUserStatusModal user={selectedUser} open={open} currentStatus={selectedUser.status} onSubmit={changeStatusSubmit}
      />
    </div>
  );
}

export default Main;
