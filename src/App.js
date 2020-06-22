import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Block from './containers/Block/Block';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Block/>
    </div>
    </BrowserRouter>
  );
}

export default App;
