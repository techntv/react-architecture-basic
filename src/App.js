import React from 'react';
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222;
`

import TodoList from './todos/TodoList'
const App = () => (
    <AppContainer>
        <TodoList />
    </AppContainer>
);

export default hot(module)(App);