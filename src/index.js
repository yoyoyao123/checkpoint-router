import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from  './store';
import {provider} from './react-redux';
import {BrowserRouter} from '.react-router-dom';
import {creatRoot} from "react-dom/client";
const  rootElement = document.getElementById("root");
const root = creatRoot(rootElement);



root.render(
  <provider store = {store}>
    <BrowserRouter>
    <App/>
      </BrowserRouter>
      </provider>
);

