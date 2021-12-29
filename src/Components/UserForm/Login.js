import userEvent from '@testing-library/user-event';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const uri = location.state?.from || "/home";

const {singinWithGoogle, logout, user} = useAuth();


const handleButton =() =>{
    singinWithGoogle()
    history.push(uri)
}
    return (
        <div>
           <h2> Login/Sign-Up</h2> 
           <h3>{user.displayName}</h3>

       
       <button onClick={hendelButton}>Google Login</button>
       
        <button onClick={logout}> Log out</button>
        </div>
    );
};

export default Login;<h2>Please Login</h2>