import { useEffect, useState } from 'react'
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import io from 'socket.io-client'
import LoginPage from './pages/LoginPage'
import { useDispatch, useSelector } from 'react-redux'
import PrivateRoute from './CustomRoutes/PrivateRoute'
import LoginRoute from './CustomRoutes/LoginRoute'
import StudentBookSessionsPage from './pages/StudentPages/StudentBookSessionsPage'
import NavigationBar from './components/NavigationBar'
import StyledPage from './pages/Dashboard/Dashboard.styled'
import StudentUpcomingSessionsPage from './pages/StudentPages/StudentUpcomingSessionPage'
import DoctorDetailsPage from './pages/StudentPages/DoctorDetailsPage'
import ChatPage from './pages/StudentPages/ChatPage/ChatPage'
import WeeklyReminderPage from './pages/StudentPages/WeeklyReminderPage'
import { useLocation } from 'react-router-dom'
import BookSessionPage from './pages/StudentPages/BookSessionPage'
import { FetchUpcomingSessions } from './redux/UpcomingSessionsSlice/UpcomingSessionsSlice'
import DoctorAddIntervalPage from './pages/DoctorPages/DoctorAddIntervalPage'
import DoctorViewSessionsPage from './pages/DoctorPages/DoctorViewSessionsPage'
import NewFeedbackPage from './pages/StudentPages/NewFeedbacksPage/NewFeedbackPage'
import styled from 'styled-components'

const StyledImg = styled.img`
    width: 765px;
    object-fit: contain;
    margin: 0 auto;
`

function App() {
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const auth = useSelector(state => state.auth)

    // auth side effect
    useEffect(() => {
        if (!auth.token) history.push('/login')
    }, [auth.token])

    // test side effect
    useEffect(() => {
        dispatch(FetchUpcomingSessions(auth.profile.id))
    }, [])

    return (
        <div className="App">
            <StyledPage.Page>
                {auth.token && <NavigationBar />}
                <Switch>
                    <LoginRoute exact path="/login">
                        <LoginPage />
                    </LoginRoute>

                    <Route exact path="/">
                        <StyledImg src="landing-picture.jpg" alt="" />
                    </Route>

                    <StyledPage.PageContent>
                        <PrivateRoute exact path="/booking">
                            <StudentBookSessionsPage />
                        </PrivateRoute>
                        <PrivateRoute exact path="/upcoming">
                            <StudentUpcomingSessionsPage />
                        </PrivateRoute>

                        <PrivateRoute exact path="/doctor-details">
                            <DoctorDetailsPage />
                        </PrivateRoute>

                        <PrivateRoute exact path="/chat">
                            <ChatPage />
                        </PrivateRoute>

                        <PrivateRoute exact path="/weekly-reminder">
                            <WeeklyReminderPage />
                        </PrivateRoute>

                        <PrivateRoute exact path="/book-session">
                            <BookSessionPage />
                        </PrivateRoute>

                        <PrivateRoute exact path="/new-feedbacks">
                            <NewFeedbackPage />
                        </PrivateRoute>

                        <PrivateRoute exact path="/feedbacks">
                            <NewFeedbackPage />
                        </PrivateRoute>
                        {/*<PrivateRoute exact path="/add-interval">*/}
                        {/*    <DoctorAddIntervalPage />*/}
                        {/*</PrivateRoute>*/}
                    </StyledPage.PageContent>
                </Switch>
            </StyledPage.Page>
        </div>
    )
}

export default App
