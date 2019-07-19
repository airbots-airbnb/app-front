import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
import  Home  from '../src/views/Home';
import  Login  from '../src/views/Login';

function Routes(){
    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </>
    )    
}

export default Routes;