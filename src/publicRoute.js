import React from 'react';
import {Redirect,Route} from 'react-router-dom';

const PublicRoute = ({component: Component,restricted, ...rest}) => {
    let isAuth;
    let userInfo=JSON.parse(sessionStorage.getItem('jwtToken'));
    if(userInfo){
        isAuth=true
    }else{
        isAuth=false
    }
    return (

        <Route {...rest} render={props => (
            isAuth && restricted  ?
            <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute; 


