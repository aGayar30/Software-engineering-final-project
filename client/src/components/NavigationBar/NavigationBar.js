import StyledPage from "../../pages/Dashboard/Dashboard.styled";
import NavigationButton from "../../pages/Dashboard/NavigationButton";
import icons from "../Icons";
import {logout} from "../../redux/AuthSlice/AuthSlice";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'


const NavigationBar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    return (
        <StyledPage.Navigation>
            <StyledPage.LogoTitle onClick={() => history.push('/')}>YouMatter</StyledPage.LogoTitle>

            <NavigationButton buttonText="Meetings" icon={icons.Clock} showArrow={true}>
                <StyledPage.NavigationSubButton onClick={() => history.push('/booking')}>Book Session</StyledPage.NavigationSubButton>
            </NavigationButton>

            <NavigationButton buttonText="Reminders" icon={icons.Calender} showArrow={true}>
                <StyledPage.NavigationSubButton onClick={() => history.push('/upcoming')}>Upcoming sessions</StyledPage.NavigationSubButton>
                <StyledPage.NavigationSubButton onClick={() => history.push('/weekly-reminder')}>Weekly session reminder</StyledPage.NavigationSubButton>
                <StyledPage.NavigationSubButton onClick={() => history.push('/new-feedbacks')}>New Feedbacks</StyledPage.NavigationSubButton>
            </NavigationButton>

            <NavigationButton buttonText="Feedback" icon={icons.Annotation} showArrow={false} customOnClick={() => history.push('/feedbacks')} />

            <NavigationButton buttonText="Chat" icon={icons.Chat} showArrow={false} customOnClick={() => history.push('/chat')} />
            <NavigationButton buttonText="Logout" icon={icons.Logout} showArrow={false} customOnClick={() => {
                dispatch(logout())
                history.push('/login')
            }} />
        </StyledPage.Navigation>
    )
}

export default NavigationBar
