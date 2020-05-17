import React from 'react';

import WidgetRedux from './components/WidgetRedux';
import WidgetStent from './components/WidgetStent';

import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WidgetRedux />
        <WidgetStent />
      </header>
    </div>
  );
}

export default App;
