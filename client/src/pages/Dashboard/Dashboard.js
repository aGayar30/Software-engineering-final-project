import StyledPage from './Dashboard.styled'
import NavigationButton from "./NavigationButton";
import { Route, Switch, useHistory } from "react-router-dom";
import DoctorAddIntervalPage from "../DoctorPages/DoctorAddIntervalPage";
import DoctorViewSessionsPage from "../DoctorPages/DoctorViewSessionsPage";
import StudentUpcomingSessionsPage from "../StudentPages/StudentUpcomingSessionPage";
import StudentBookSessionsPage from "../StudentPages/StudentBookSessionsPage";
import DoctorDetailsPage from "../StudentPages/DoctorDetailsPage";
import ChatPage from "../StudentPages/ChatPage/ChatPage";
import icons from "../../components/Icons/";
import WeeklyReminderPage from "../StudentPages/WeeklyReminderPage";
import { logout } from "../../redux/AuthSlice/AuthSlice";
import { useDispatch } from "react-redux";
import PrivateRoute from "../../CustomRoutes/PrivateRoute";


// TODO: remove dashboard page

const Dashboard = () => {
    const history = useHistory()

    return (
        <StyledPage.Page>
            {/*<StyledPage.Navigation>*/}
            {/*    <StyledPage.LogoTitle onClick={() => history.push('/')}>YouMatter</StyledPage.LogoTitle>*/}

            {/*    <NavigationButton buttonText="Meetings" icon={icons.Clock} showArrow={true}>*/}
            {/*        <StyledPage.NavigationSubButton onClick={() => history.push('/booking')}>Book Session</StyledPage.NavigationSubButton>*/}
            {/*    </NavigationButton>*/}

            {/*    <NavigationButton buttonText="Reminders" icon={icons.Calender} showArrow={true}>*/}
            {/*        <StyledPage.NavigationSubButton onClick={() => history.push('/upcoming')}>Upcoming sessions</StyledPage.NavigationSubButton>*/}
            {/*        <StyledPage.NavigationSubButton onClick={() => history.push('/weekly-reminder')}>Weekly session reminder</StyledPage.NavigationSubButton>*/}
            {/*        <StyledPage.NavigationSubButton>New Feedbacks</StyledPage.NavigationSubButton>*/}
            {/*    </NavigationButton>*/}

            {/*    <NavigationButton buttonText="Feedback" icon={icons.Annotation} showArrow={false}>*/}
            {/*    </NavigationButton>*/}

            {/*    <NavigationButton buttonText="Chat" icon={icons.Chat} showArrow={false} customOnClick={() => history.push('/chat')} />*/}
            {/*    <NavigationButton buttonText="Logout" icon={icons.Logout} showArrow={false} customOnClick={() => {*/}
            {/*        dispatch(logout())*/}
            {/*        history.push('/login')*/}
            {/*    }} />*/}
            {/*</StyledPage.Navigation>*/}

            <StyledPage.PageContent>
                {/* Doctors Routes */}
                <Switch>
                    <Route exact path="/add-interval">
                        <DoctorAddIntervalPage />
                    </Route>

                    <Route exact path="/get-sessions">
                        <DoctorViewSessionsPage />
                    </Route>
                </Switch>

                {/* Students Routes */}
                <Switch>
                    <Route exact path="/upcoming">
                        <StudentUpcomingSessionsPage />
                    </Route>

                    <PrivateRoute exact path="/booking">
                        <StudentBookSessionsPage />
                    </PrivateRoute>

                    <Route exact path="/doctor1">
                        <DoctorDetailsPage />
                    </Route>

                    <Route exact path="/chat">
                        <ChatPage />
                    </Route>

                    <Route exact path="/weekly-reminder">
                        <WeeklyReminderPage />
                    </Route>
                </Switch>
            </StyledPage.PageContent>

        </StyledPage.Page>
    )
}

export default Dashboard
