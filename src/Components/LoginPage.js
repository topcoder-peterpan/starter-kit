import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../Redux/Authentication/actions';


const LoginPage = () => {
    const dispatch = useDispatch();
    const { logged_in } = useSelector((state) => state.authentication)

    const handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        const data = {
            email, password
        };

        dispatch(loginAction(data));
    };
    
    return !logged_in ?
        (
            <div>
                <h3>Login Page</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
                Don't have account? <Link to='register'>Register here</Link>
            </div>
        ) : 
        (
            <Navigate to='/' />
        )
}

export default LoginPage