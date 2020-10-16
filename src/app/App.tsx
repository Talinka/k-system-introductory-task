import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
// components
import Main from '../components/Main';

import { RootState } from './rootReducer';
import { fetchUsers } from '../slices/usersSlice';
// styles
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  header: {
    textAlign: 'center',
    color: '#562',
  },
  root: {
    margin: '2% 3%',
  }
});

function App() {
  const classes = useStyles();

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
      <div className={classes.root}>
        <h1>Something went wrong...</h1>
        <div>{error}</div>
      </div>
    )
  }

  const renderLoading = () => (
    <>
      <CircularProgress />
      <div>Loading...</div>
    </>
  )

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>User list</h2>
      {isLoading ? renderLoading() : <Main users={users} />}
    </div>
  );
}

export default App;
