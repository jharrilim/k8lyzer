import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import PodGraph from './components/PodGraph';

const client = new ApolloClient({
  uri: process.env.SERVER_URL ?? 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main className="main">
        <PodGraph />
      </main>
    </ApolloProvider>
  );
}

export default App;
