import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import authService from './authService'
import { RootState } from '../../app/store'

export interface authStateInterface {
  token: string
  error: any
  status: 'idle' | 'loading' | 'failed'
}

const initialState: authStateInterface = {
  token: '',
  error: '',
  status: 'idle',
}

// Login user
export const login = createAsyncThunk(
  'auth/login',
  async (_, { rejectWithValue }) => {
    try {
      return await await authService.login({
        username: 'daniel',
        password: '123123',
      })
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    reset: (state) => {
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
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const { reset } = authSlice.actions

export const user = (state: RootState) => state.auth

export default authSlice.reducer
