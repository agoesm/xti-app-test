import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '@services/axiosInstance';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({email, password}, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/login', {email, password});
      // console.log('response =>', response);
      return {token: response.data.token, user: {email}};
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.error);
    }
  },
);
