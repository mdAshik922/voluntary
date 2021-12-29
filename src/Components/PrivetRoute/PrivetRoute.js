import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivetRoute = ( { children, ...rest } ) => {
   
        let {user} = useAuth();
  return (
    <Route
    {...rest}
    render={({ location }) =>
        user.displayName ? (
            children
        ) : (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            />
        )
    }
/>
)}
  


export default PrivetRoute;