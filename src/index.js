import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as HooksProvider } from 'react-apollo-hooks';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import Routes from './Routes';
import client from './graphql';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <ApolloProvider client={client}>
        <HooksProvider client={client}>
            <Router>
                <Routes />
            </Router>
        </HooksProvider>
    </ApolloProvider>
    ,
    document.getElementById('root')
);

//serviceWorker.unregister();