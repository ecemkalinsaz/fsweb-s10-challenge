import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { myReducer } from './reducers';
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { ToastContainer } from "react-toastify";

import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(
  myReducer,
  applyMiddleware(thunk)
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Provider>
);
