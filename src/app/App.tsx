import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Main from '../components/Main';

import { RootState } from './rootReducer';
import { fetchUsers } from '../slices/usersSlice';

function App() {
  const dispatch = useDispatch();

  const {
    users,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    dispatch(fetchUsers);
  },
  // when we have server api for change user state, we'll need dispatch in dependency list
  // eslint-disable-next-line
  []);

  if (error) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <div>{error}</div>
      </div>
    )
  }

  const renderLoading = () => (
    <div>Loading...</div>
  )

  return (
    <div>
      <h2>User list</h2>
      {isLoading ? renderLoading() : <Main users={users} />}
    </div>
  );
}

export default App;
