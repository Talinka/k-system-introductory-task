import React from 'react';

export enum Status {
  new,
  proven,
  VIP
}

type UserProps = {
  name: string,
  status: Status,
}

function User({ name, status}: UserProps) {
  return (
    <div>
      <div>{name}: {status}</div>
    </div>
  );
}

export default User;