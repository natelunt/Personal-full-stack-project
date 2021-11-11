import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

const stripePromise = loadStripe('pk_test_fm2RtiUeglz5oQL8GXe4xjzM')

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
