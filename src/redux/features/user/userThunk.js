import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '@services/axiosInstance';

export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
  const response = await axiosInstance.get('/users?page=1&per_page=12');
  // console.log('data =>', response.data);
  return response.data.data;
});

export const userById = createAsyncThunk('users/userById', async userId => {
  const response = await axiosInstance.get(`/users/${userId}`);
  // console.log('response =>', response.data);
  return response.data.data;
});
