import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import fakeAuth from '../utils';

const Login = () => {
    const [redirectToReferrer, setRedirecterToReferrer] = useState(false)
    const login = () => {
        fakeAuth.authenticate(() => {
            setRedirecterToReferrer(true)
        })
    }
    return(
        <div>{redirectToReferrer===true ?
                <Redirect to="/protected"/> :
            <div>
                <p>LOOOOOOG</p>
                <button onClick={login}>login</button>
            </div>}
        </div>
    )
}
export default Login