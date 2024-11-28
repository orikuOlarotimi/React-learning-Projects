import React from "react";
import ReactDom from 'react-dom';
import './index.css' ;
import { AppProvider } from './context';
import App from './App'
ReactDom.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)