import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginApi } from '../authApi'


const initialState = {
    user: null,
    UserRegister: null,
    status: null,
    signErr: null,
    emailData: null,
    loading: false,
    successMessage: null,
    successMsg: null,
    errorMsg: null,
}
export const loginAsync = createAsyncThunk('mm/lms', async (data) => {
    const response = await loginApi(data)
    return response.data
  })

  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.status = 'idle'
          },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginAsync.pending, (state) => {
        //   state.loading = true
          state.user = 'idle'
        })
        
  
    },
  })
  

  
  export default authSlice.reducer