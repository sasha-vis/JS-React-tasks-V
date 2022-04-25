import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';

import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store/store';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
            <Nav />
            <Main />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
