import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate,useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user,isLoading}=useAuth();
    let location=useLocation();
    const adminLogIn = localStorage.getItem("AdminLogIn");
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }

    if(user.email && adminLogIn)
    {
        return children;
    }
    return <Navigate to="/" state={{from:location}}/>
};

export default AdminRoute;