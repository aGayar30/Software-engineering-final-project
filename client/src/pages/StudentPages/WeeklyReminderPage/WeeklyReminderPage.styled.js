import styled from 'styled-components'
import StyledCard from "../../../components/GenericStyledComponents/StyledCard";

const Container = styled(StyledCard)`
    display: flex;
    justify-content: space-around;
    font-family: sans-serif;
    text-align: center;
    width: 600px;
    margin: 250px auto;
    padding: 20px 0 20px 0;
`

const Time = styled.div`
    font-size: 32px;
`

export default { Container, Time }
