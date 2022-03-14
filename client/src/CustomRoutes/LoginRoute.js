import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


const LoginRoute = (props) => {
    const auth = useSelector(state => state.auth)

    if (!auth.token) {
        return <Route {...props} />;
    } else {
        return <Redirect to="/" />;
    }
}


export default LoginRoute
