import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { AUTH_TOKEN } from '../../constants/Auth';

class Signup extends React.Component{
    state = {
        email: '',
        password: '',
        userName: '',
    };

    render(){
        const { email, password, userName } = this.state;
                
        const SIGNUP_MUTATION = gql`
            mutation SignupMutation($email: String!, $password: String!, $userName: String!) {
                signup(email: $email, password: $password, userName: $userName) {
                    token
                }
            }
        `
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4 m-t-md text-center">
                    <h2 className="mv3">Sign Up</h2>
                    <ul className="social-auth">
                        <li><a href='' className='facebook' onClick=''><i className='zmdi zmdi-facebook'></i> Facebook </a></li>
                        <li><a href='' className='google' onClick=''><i className='zmdi zmdi-google'></i> Google </a></li>
                    </ul>
                    <form className="flex flex-column">
                        <input
                            className = "form-control m-b-xs"
                            value={userName}
                            onChange={e => this.setState({ userName: e.target.value })}
                            type="text"
                            placeholder="Username"
                        />
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
                            placeholder="Choose a safe password"
                        />
                        <Mutation
                            mutation={SIGNUP_MUTATION}
                            variables={{ email, password, userName }}
                            onCompleted={data => this._confirm(data)}
                            >
                            {mutation => (
                                <div className="btn btn-success" type='submit' onClick={mutation}>
                                    Create Account
                                </div>
                            )}
                        </Mutation>
                    </form>
                    
                    <Link to="/login">Already have an account?</Link>
                </div>
            </div>
        );
    }

    _confirm = async () => {
        const { token } = data.signup
        this._saveUserData(token)
        this.props.history.push(`/`)
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

export default Signup;