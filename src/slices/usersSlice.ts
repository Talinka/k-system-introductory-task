import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../types/User';
import getUsers from '../api/userListApi';
import { AppDispatch } from '../app/store';
import UserStatus from '../types/UserStatus';

interface UsersState {
  users: User[],
  isLoading: boolean,
  error: string | null,
}

const usersInitialState: UsersState = {
  users: [],
  isLoading: false,
  error: null
}

const startLoading = (state: UsersState) => {
  state.isLoading = true
}

const loadingFailed = (state: UsersState, action: PayloadAction<string>) => {
  state.isLoading = false;
  state.error = action.payload;
}

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    getUsersStart: startLoading,
    getUsersSuccess(state, { payload }: PayloadAction<User[]>) {
      const users = payload;
      state.users = users;
      state.isLoading = false;
      state.error = null;
    },
    getUsersFailure: loadingFailed,
    changeUserStatus(state, action: PayloadAction<{ user: User, newStatus: UserStatus}>) {
      const { user: selectesUser, newStatus } = action.payload;
      const index = state.users.findIndex((user) => user.id === selectesUser.id);
      state.users[index].status = newStatus;
    },
  }
})

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  changeUserStatus,
} = usersSlice.actions;

export default usersSlice.reducer;

export const fetchUsers = async (dispatch: AppDispatch) => {
  try {
    dispatch(getUsersStart());
    const users = await getUsers();
    dispatch(getUsersSuccess(users));
  } catch (err) {
    dispatch(getUsersFailure(err.message));
  }
}