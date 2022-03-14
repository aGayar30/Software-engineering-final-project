import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const FetchUpcomingSessions = createAsyncThunk(
    'fetch/upcoming-sessions',
    async (userId, thunkAPI) => {
        const response = await axios.get(`/student/get-sessions/${userId}`)
        return response.data
    }
)


const UpcomingSessionsSlice = createSlice({
    name: 'upcoming-sessions',
    initialState: [],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(FetchUpcomingSessions.pending, state => {
            return []
        })
        builder.addCase(FetchUpcomingSessions.fulfilled, (state, { payload }) => {
            return payload.sessions
        })
    }
})


export default UpcomingSessionsSlice.reducer
