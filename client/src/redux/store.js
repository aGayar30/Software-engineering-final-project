import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './AuthSlice/AuthSlice'
import DoctorsReducer from "./DoctorsSlice/DoctorsSlice"
import UpcomingSessionsSlice from "./UpcomingSessionsSlice/UpcomingSessionsSlice"
const rootReducer = {
    auth: AuthReducer,
    doctors: DoctorsReducer,
    upcomingSessions: UpcomingSessionsSlice,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store
