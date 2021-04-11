import React from 'react';
import {Redirect,Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    let isAuth;
    let userInfo=JSON.parse(sessionStorage.getItem('jwtToken'));
    if(userInfo){
        isAuth=true
    }else{
        isAuth=false
    }
    return (

        <Route {...rest} render={props => (
            isAuth ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;