import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import authService from './authService'
import { RootState } from '../../app/store'
import { LoginInputTypes } from 'Schema/LoginSchema'

export interface authStateInterface {
  user: any
  token: string
  error: any
  status: 'idle' | 'loading' | 'failed'
}

const initialState: authStateInterface = {
  user: {},
  token: '',
  error: '',
  status: 'idle',
}

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (_, { rejectWithValue }) => {
    try {
      return await authService.register({
        username: 'kosaaaaata',
        password: '123123',
        repeatPassword: '123123',
      })
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return rejectWithValue(message)
    }
  }
)

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (userData: LoginInputTypes, { rejectWithValue }) => {
    try {
      return await authService.login(userData)
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return rejectWithValue(message)
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    reset: (state) => {
      state.user = {}
      state.token = ''
      state.error = ''
      state.status = 'idle'
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'idle'
        state.token = action.payload
        state.error = ''
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      .addCase(register.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'idle'
        state.user = action.payload
        state.error = ''
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const { reset } = authSlice.actions

export const user = (state: RootState) => state.auth

export default authSlice.reducer
