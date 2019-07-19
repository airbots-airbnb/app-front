import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
import  Home  from '../src/views/Home';
import Alojamientos from '../src/views/Alojamientos';

function Routes(){
    return(
        <Fragment>
            <Route exact patch="/" component={Home}></Route>
            <Route exact patch="./alojamientos" component={Alojamientos}></Route>
        </Fragment>
    )    
}

export default Routes;