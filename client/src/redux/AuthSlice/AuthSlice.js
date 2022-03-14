import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const loginRequest = async (id, password) => await axios.post('/auth/login', { id, password })

export const Login = createAsyncThunk('auth/login', async ({id, password}, thunkAPI) => {
    const response = await loginRequest(id, password)
    return response.data
})

const emptyAuthState = {
    token: '',
    userType: '',
    profile: {},
    error: "",
}

const localAuth = JSON.parse(localStorage.getItem('auth'))
let initialState = {}
if (localAuth) {
    initialState = localAuth
} else {
    initialState = {
        token: '',
        userType: '',
        profile: {},
        error: "",
    }
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: state => {
            // state = emptyAuthState
            state.token = ""
            state.userType = ""
            state.profile = {}
            state.error = ""
            localStorage.removeItem('auth')
        },
        setAuth: (state, { payload }) => {
            state.token = payload.token
            state.userType = payload.userType
            state.profile = payload.profile
        },
        setError: (state, { payload }) => {
            state.error = payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(Login.pending, state => {
                state.error = ""
                state.userType = ""
                state.profile = {}
            })
            .addCase(Login.fulfilled, (state, { payload }) => {
                state.token = payload.token.token
                state.userType = payload.type
                state.profile = payload.profile
                localStorage.setItem('auth', JSON.stringify(state))
            })
            .addCase(Login.rejected, (state, { payload }) => {
                console.log({ payload })
                // state.error = payload.errors[0].message
            })
    },
})

export default AuthSlice.reducer
export const { logout, setAuth, setError } = AuthSlice.actions
