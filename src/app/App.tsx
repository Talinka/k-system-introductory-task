import React from 'react';

import Main from '../components/Main';

import User from '../types/User';
import UserStatus from '../types/UserStatus';

const users: Array<User> = [
  { id: 1, name: "Ivan", status: UserStatus.VIP },
  { id: 2, name: "Pert", status: UserStatus.New },
  { id: 3, name: "Michal", status: UserStatus.VIP },
  { id: 4, name: "John", status: UserStatus.Verified },
]

function App() {

  return (
    <div>
      <h2>User list</h2>
      {users.length > 0 && <Main users={users}/>}
    </div>
  );
}

export default App;
