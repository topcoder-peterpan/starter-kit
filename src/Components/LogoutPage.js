import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../Redux/Authentication/actions';

const LogoutPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logoutAction());
    });
    
    return <Navigate to='/' />
}

export default LogoutPage