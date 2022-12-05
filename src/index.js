import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css'


const client = new ApolloClient({
  uri: 'https://innov8hub.ng/graphql',
  cache: new InMemoryCache(),
});


ReactDOM.render(
  
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);