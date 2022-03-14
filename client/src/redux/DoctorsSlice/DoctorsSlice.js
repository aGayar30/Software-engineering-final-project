import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const getDoctorsRequest = async () => axios.get('/student/get-intervals')

export const FetchDoctors = createAsyncThunk('fetch/doctors', async () => {
    const response = await getDoctorsRequest()
    return response.data
})

const DoctorsSlice = createSlice({
    name: 'doctors',
    initialState: [],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(FetchDoctors.pending, state => {
            return []
        })
        builder.addCase(FetchDoctors.fulfilled, (state, { payload }) => {
            console.log('fetch doctors fulfilled: ', payload)
            return payload.doctors
        })
    },
})

export default DoctorsSlice.reducer
