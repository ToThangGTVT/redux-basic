import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import List from './components/list';
import {createStore} from 'redux'
import reducer from './reduces/index';
import {store} from './store'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button text = {store.getState().tech}/>
        <List></List>
      </header>
    </div>
  );
}

store.subscribe(App)

export default App;
