import styled from 'styled-components'
import StyledPage from '../../../components/GenericStyledComponents/StyledPage'

const Page = styled(StyledPage)`
    width: 765px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 0;
`

const Form = styled.div`
    display: flex;
    justify-content: space-between;
`

const FormFooter = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 20px;
`

const Button = styled.button`
    border: none;
    background-color: gray;
    color: white;
    padding: 5px 20px;
    border-radius: 6px;
`

export default { Page, Form, FormFooter, Button }
