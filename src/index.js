import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route, Switch} from 'react-router-dom';
import configureStore from './store/index';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});
  
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const store = configureStore();

const rootEl = document.getElementById('app-site');

// Create a reusable render method that we can call more than once
let render = () => {
    // Dynamically import our main App component, and render it
    const App = require('./containers/App').default;

    ReactDOM.render(
        <ApolloProvider client={client}>
            <Provider store={store}>
                <HashRouter basename="/">
                    <Switch>
                        <Route path="/" component={App}/>
                    </Switch>
                </HashRouter>
            </Provider>,
        </ApolloProvider>,        
        rootEl
    );
};

if (module.hot) {
    // Support hot reloading of components.
    // Whenever the App component file or one of its dependencies
    // is changed, re-import the updated component and re-render it
    module.hot.accept('./containers/App', () => {
        setTimeout(render);
    });
}
render();
