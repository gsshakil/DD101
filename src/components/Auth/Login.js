import React from 'react';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { AUTH_TOKEN } from '../../constants/Auth';

class Login extends React.Component{
    state = {
        email: '',
        password: '',
    };

    render(){
        const { email, password } = this.state;
    
        const LOGIN_MUTATION = gql`
            mutation LoginMutation($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                token
                }
            }
        `

        return (
            <div className="row">
                <div className="col-md-4 offset-md-4 m-t-md text-center">
                    <h2 className="mv3">Login</h2>
                    <ul className="social-auth">
                        <div className="form-group">
                            <a class="btn btn-block btn-social btn-facebook">
                                <span class="zmdi zmdi-facebook"></span> Sign in with Facebook
                            </a>
                        </div>
                        <div className="form-group">
                            <a class="btn btn-block btn-social btn-google">
                                <span class="zmdi zmdi-google"></span> Sign in with Google
                            </a>
                        </div>
                    </ul>
                    <div className="flex flex-column">
                        <input
                            className = "form-control m-b-xs"
                            value={email}
                            onChange={e => this.setState({ email: e.target.value })}
                            type="text"
                            placeholder="Your email address"
                        />
                        <input
                            className = "form-control m-b-xs"
                            value={password}
                            onChange={e => this.setState({ password: e.target.value })}
                            type="password"
                            placeholder="Your Password"
                        />
                    </div>
                    <Mutation
                        mutation={LOGIN_MUTATION}
                        variables={{ email, password}}
                        onCompleted={data => this._confirm(data)}
                        >
                        {mutation => (
                            <div className="btn btn-success" type='submit' onClick={mutation}>
                                Login
                            </div>
                        )}
                    </Mutation>
                    <Link to='/signup'>Need to create an account?</Link>
                </div>
            </div>
        );
    }

    _confirm = async () => {
        const { token } = data.login
        this._saveUserData(token)
        this.props.history.push(`/`)
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

export default Login;