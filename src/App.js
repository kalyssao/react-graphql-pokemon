import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsContainer } from './containers/PokemonsContainer';
import './App.css';

function App() {
    // set the client to a constant, pass the graphql server
    const client = new ApolloClient({
        uri: 'https://graphql-pokemon.now.sh'
    });
    // everthing within main has access to ApolloProvider
    return (
        <ApolloProvider client={client}>
            <main>
                <PokemonsContainer/>
            </main>
        </ApolloProvider>
    );
}

export default App;
