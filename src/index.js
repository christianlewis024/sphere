import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProvider} from "./StateProvider"
import reducer, { initialState } from './reducer';
import { HashRouter } from 'react-router-dom'


ReactDOM.render(

    <StateProvider initialState={initialState} reducer={reducer}>
      <HashRouter>
    <App />
    </HashRouter>
    </StateProvider>,
  
  document.getElementById('root')
);


