import StyledPage from './LoginPage.styled'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { Login } from '../../redux/AuthSlice/AuthSlice'
import { useEffect } from 'react'

const LoginPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const auth = useSelector(state => state.auth)
    const { register, handleSubmit } = useForm()

    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = async ({ id, password }) => {
        console.log({ id, password })
        await dispatch(Login({ id, password }))
    }

    useEffect(() => {
        if (auth.token) history.push('/')
    }, [])

    return (
        <StyledPage.Page>
            <StyledPage.LeftPart>
                <StyledPage.Title>YouMatter</StyledPage.Title>
            </StyledPage.LeftPart>

            <StyledPage.RightPart>
                <StyledPage.Form onSubmit={handleSubmit(onSubmit)}>
                    <StyledPage.FormLightText>Welcome to You Matter</StyledPage.FormLightText>
                    <StyledPage.FormTitle>Log into your Account</StyledPage.FormTitle>
                    <StyledPage.InputLabel>ID</StyledPage.InputLabel>
                    <StyledPage.IdInput {...register('id', { required: true })} />
                    <StyledPage.InputLabel>Password</StyledPage.InputLabel>
                    <StyledPage.PasswordInput {...register('password', { required: true })} />
                    <StyledPage.FormButton>Log In</StyledPage.FormButton>
                </StyledPage.Form>
            </StyledPage.RightPart>
        </StyledPage.Page>
    )
}

export default LoginPage
