import React, { Fragment } from 'react';
import isAuthenticated from './utils/IsAuthenticated';
import { Route, Redirect } from 'react-router-dom';
import Home from '../src/views/Home';
import Alojamientos from '../src/views/Alojamientos';
import Login from '../src/views/Login';

function Logout(){
    localStorage.removeItem('blogToken');
    return <Redirect to="/login" />
}
const SecureLogout = isAuthenticated(Logout);

function Routes() {
    return (
        <>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/alojamientos" component={Alojamientos}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/logout" component={SecureLogout} />
        </>
    )
}

export default Routes;