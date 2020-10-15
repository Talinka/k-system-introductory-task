import React from 'react';
import UserStatus from '../types/UserStatus';


type UserProps = {
  name: string,
  status: UserStatus,
}

function User({ name, status}: UserProps) {
  return (
    <div>
      <div>{name}: {status}</div>
    </div>
  );
}

export default User;