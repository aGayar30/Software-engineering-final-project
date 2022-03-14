import { useHistory } from 'react-router-dom'
import StyledCard from "./NewSessionDoctorCard.styled"

const NewSessionDoctorCard = ({ name, type, available_days, user_id }) => {
    const history = useHistory()

    return (
        <StyledCard.NewSessionDoctorCardStyled onClick={() => history.push({ pathname:'doctor-details', search: `doctorId=${user_id}`})}>
            <StyledCard.Name>
                <p>{name}</p>
            </StyledCard.Name>

            <StyledCard.Type>
                <p>{type}</p>
            </StyledCard.Type>

            <StyledCard.AvailableDays>
                <p>{available_days}</p>
            </StyledCard.AvailableDays>
        </StyledCard.NewSessionDoctorCardStyled>
    )
}


export default NewSessionDoctorCard;
