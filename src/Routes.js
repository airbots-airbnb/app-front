import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../src/views/Home';
import Alojamientos from '../src/views/Alojamientos';

function Routes() {
    return (
        <>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/alojamientos" component={Alojamientos}></Route>
        </>
    )
}

export default Routes;