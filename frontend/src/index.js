import React from 'react';
import ReactDOM from 'react-dom';
import './App/App.scss';
import App from './App/App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from './App/reportWebVitals';
import store from "./App/store";
  

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
