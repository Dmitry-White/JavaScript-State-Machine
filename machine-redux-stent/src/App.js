import React from 'react';

import WidgetRedux from './components/WidgetRedux';

import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WidgetRedux />
      </header>
    </div>
  );
}

export default App;
