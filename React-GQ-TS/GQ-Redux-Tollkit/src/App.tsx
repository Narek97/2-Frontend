import React from 'react';
import './App.css';
import * as Styled from './AppStyled';
import HomePage from "./pages/homePage/HomePage";


const App = () => {
    return (
        <Styled.AppContainer>
            <HomePage/>
        </Styled.AppContainer>
    );
};

export default App;