import React, { useState, useEffect } from 'react';
import './App.css';
import Characters from './components/Characters'
import styled from 'styled-components'

const Heading = styled.h1`
margin-bottom: 3rem;
font-size: 2.5rem;
color: blue;
`


const App = () => {

  return (
    <div className="App">
    <Heading>🌟 React Wars 🌟</Heading>
    <div>
    <Characters />
    </div>
    </div>
  );
}

export default App;
