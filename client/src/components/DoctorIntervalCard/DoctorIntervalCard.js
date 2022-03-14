import StyledCard from "./DoctorIntervalCard.styled"
import { useHistory, useLocation } from 'react-router-dom'

const DoctorIntervalCard = ({ date, day, from, to }) => {
    const history = useHistory()
    const location = useLocation()

    return(
        <StyledCard.DoctorIntervalCardStyled onClick={() => history.push({pathname: '/book-session', search: location.search})}>
            <StyledCard.Date><p>{date}</p></StyledCard.Date>
            <StyledCard.Day><p>{day}</p></StyledCard.Day>
            <StyledCard.From><p>{from}</p></StyledCard.From>
            <StyledCard.To><p>{to}</p></StyledCard.To>
        </StyledCard.DoctorIntervalCardStyled>
    )
}


export default DoctorIntervalCard
