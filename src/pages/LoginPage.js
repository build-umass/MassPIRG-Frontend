import LoginImage from '../assets/login.png';
import './LoginPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSignIn } from 'react-auth-kit';
import axios, { AxiosError } from 'axios';
import Logo from '../assets/mass-logo.png';

// Path: src/pages/LoginPage.js

const LoginPage = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    const signIn = useSignIn();
    const submitHandler = (event) => {
        event.preventDefault();
        const baseUrl = "http://localhost:5001/api";
        // const baseUrl = process.env.REACT_APP_ROOT_API;
        console.log(email, password)
        axios.post(`${baseUrl}/auth/login`, {
            email: email,
            password: password,
        }).then(res => {
            const { data } = res;
            // localStorage.setItem('token', data.token);
            signIn({
                token: data.token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: { email: email }
            })
            navigate('/');
            console.log(data.message);
        }).catch(err => {
            if (err && err instanceof AxiosError) {
                console.log(err.response?.data.message);
            } else if (err && err instanceof Error) {
                console.log(err.message);
            }
        })
    }
    return (
        <div className="login-page">
            <div className="relative w-100 h-100 d-flex flex-col">
                <div className="login-page__container__left">
                    <img src={LoginImage} alt="login" />
                </div>
                <div className="login-page__container__right">
                    <div className="w-100">
                        <img src={Logo} alt="logo" className="w-100 h-100" />
                    </div>
                    <div className="d-flex align-items-center flex-column h-max w-max">
                        <div className="mb-auto p-2">
                            <h2 className="text-light">Sign In</h2>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                <form className="login-page__container__right__form" onSubmit={submitHandler}>
                                    <div className="form-outline mb-4">
                                        <input type="email" id="email" value={email} onChange={event => setemail(event.target.value)} className="form-control" />
                                        <label className="form-label text-light" htmlFor="email">Email or username</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="loginPassword" value={password} onChange={event => setpassword(event.target.value)} className="form-control" />
                                        <label className="form-label text-light" htmlFor="password">Password</label>
                                    </div>
                                    <div className="mb-auto p-2 w-100">
                                        <button type="submit" className="btn btn-primary rounded text-light">Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;
