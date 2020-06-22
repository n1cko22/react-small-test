import React from 'react';

import { Route, Switch, Redirect,withRouter } from 'react-router-dom';

import Login from '../../components/Login'
import List from './List/List';
import fakeAuth from '../../utils'
import User from '../../components/User'

const PrivateRoute = ({ component: Component, ...rest}) => {
    return <Route {...rest} render={(props) =>
        (fakeAuth.isAuthenticated === true
            ? <Component {...props}/>
            : <Redirect to ={"/login"}/>
        )} />
}
const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated ? (
        <p>
            Welcome! <button onClick={() => {
                fakeAuth.signOut(() => history.push('/login'))
            }}>Sign out</button>
        </p>
    ) : (
            <p>You are not logged in.</p>
        )
))

const Block = (props) => {
    console.log(props)
    return (
        <div className="Block">
            <div>
                <AuthButton />
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute path="/protected" component={List} />
                    <PrivateRoute exact path={'/:id'} component={User} />
                </Switch>
            </div>
        </div>
    )
}

export default Block