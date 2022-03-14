import styled from "styled-components";
import StyledCard from "../GenericStyledComponents/StyledCard";


const UpcomingSessionCardStyled = styled(StyledCard)``

const CardContent = styled.div`
    width: 20%;
    font-size: 19px;
`

const Name = styled(CardContent)`
  font-size: 23px;`

const Date = styled(CardContent)`
  `

const Duration = styled(CardContent)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 12px;
`

const Type = styled(CardContent)``

const Status = styled(CardContent)``


export default { UpcomingSessionCardStyled, Name, Date, Duration, Type, Status }
