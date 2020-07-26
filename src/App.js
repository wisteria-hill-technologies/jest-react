import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentWithCallback from './components/ComponentWithCallback';
import ComponentWithImports from './components/ComponentWithImports';

function App() {
  const callback = () => {
    console.log('Callback called!');
  }
  return (
    <div className="App">
      <h1>Jest Tests for React Components</h1>
      <ComponentWithCallback callback={callback} />
      <ComponentWithImports />
    </div>
  );
}

export default App;
