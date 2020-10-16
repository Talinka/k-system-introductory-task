import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../types/User';

let initialState: User[] = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeUserStatus(state, action: PayloadAction<User>) {
      const { id, status } = action.payload;
      const index = state.findIndex((user) => user.id === id);
      state[index].status = status;
    },
  }
})

export const {
  changeUserStatus,
} = usersSlice.actions;

export default usersSlice.reducer;