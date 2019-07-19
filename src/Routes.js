import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
import  Home  from '../src/views/Home';

function Routes(){
    return(
        <Fragment>
            <Route exact patch="/" component={Home}></Route>
        </Fragment>
    )    
}

export default Routes;