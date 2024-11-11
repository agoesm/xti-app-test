import {createSlice} from '@reduxjs/toolkit';
import {fetchUser, userById} from './userThunk';

const initialState = {
  data: [],
  detail: null,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    // list users
    builder
      .addCase(fetchUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });

    // user by id
    builder
      .addCase(userById.pending, state => {
        state.status = 'loading';
      })
      .addCase(userById.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.detail = action.payload;
      })
      .addCase(userById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
