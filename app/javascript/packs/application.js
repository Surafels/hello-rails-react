import React from 'react';
import "./controllers";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});