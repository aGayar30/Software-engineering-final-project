import styled from 'styled-components'
import StyledPage from "../../../components/GenericStyledComponents/StyledPage";


const Page = styled(StyledPage)``

const DetailsSection = styled.div``

const IntervalsContainer = styled.div`
  background-color: lightgray;
  border-radius: 10px;
  padding: 1rem;
  height: 80vh;
`

const Name = styled.p`
  font-size: 30px;
  line-height: 20px;
`

const Type = styled.p`
  font-size: 18px;
`

export default { Page, DetailsSection, IntervalsContainer, Name, Type }
