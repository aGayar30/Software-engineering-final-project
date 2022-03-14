import { useSelector } from 'react-redux'
import {  Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
    const auth = useSelector(state => state.auth)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute
