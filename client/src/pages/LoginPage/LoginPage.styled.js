import styled from 'styled-components'

const Page = styled.div`
    background-color: aqua;
    height: 40rem;
    width: 45rem;
    margin: 4rem auto;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
    display: flex;
`

const LeftPart = styled.div`
    background-color: #0e0041;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const RightPart = styled.div`
    background-color: lightgray;
    width: 60%;
    padding: 8rem 3rem;
`

const Form = styled.form`
    background-color: white;
    height: 23rem;
    width: 90%;
    margin: 0 auto;
    padding: 50px 30px;
`

const Input = styled.input`
    display: block;
    margin-bottom: 30px;
    width: 100%;
    border: 2px solid lightgray;
    border-radius: 2px;
    padding: 5px 10px;
`

const IdInput = styled(Input)``

const PasswordInput = styled(Input).attrs({ type: 'password' })`
    margin-bottom: 15px;
`

const InputLabel = styled.p`
    display: block;
    line-height: 0;
    margin-bottom: 10px;
    font-size: 10px;
    color: rgb(80, 80, 80);
`

const FormLightText = styled.p`
    font-size: 10px;
    color: rgb(150, 150, 150);
`

const FormTitle = styled.p`
    font-size: 26px;
    line-height: 32px;
`

const FormButton = styled.button`
    border: none;
    border-radius: 3px;
    padding: 6px 20px;
    background-color: #5600fd;
    color: white;
    display: block;
    margin: 0 auto;
`

const Title = styled.h1`
    color: white;
    letter-spacing: 2px;
    font-family: 'Fredoka One', cursive;
`

const ErrorMessage = styled.span`
    text-align: center;
    color: red;
`

export default {
    Page,
    LeftPart,
    RightPart,
    Form,
    IdInput,
    PasswordInput,
    InputLabel,
    FormLightText,
    FormTitle,
    FormButton,
    Title,
    ErrorMessage
}
