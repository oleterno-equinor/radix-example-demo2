import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <>
    <h1>Hello, EDC!</h1>
    <p>Secret value: {process.env.REACT_APP_SECRET}</p>
  </>,
  document.getElementById('root')
);
