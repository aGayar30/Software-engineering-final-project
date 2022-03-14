import StyledCard from "./UpcomingSessionCard.styled"

const UpcomingSessionCard = ({ doctor_name, date, from, to, type, status }) => {
    return (
        <StyledCard.UpcomingSessionCardStyled>
            <StyledCard.Name>
                <p>{doctor_name}</p>
            </StyledCard.Name>

            <StyledCard.Date>
                <p>{date}</p>
            </StyledCard.Date>

            <StyledCard.Duration>
                <p>{from}</p>
                <p>{to}</p>
            </StyledCard.Duration>

            <StyledCard.Type>
                <p>{type}</p>
            </StyledCard.Type>

            <StyledCard.Status>
                <p>{status}</p>
            </StyledCard.Status>
        </StyledCard.UpcomingSessionCardStyled>
    )
}


export default UpcomingSessionCard;
