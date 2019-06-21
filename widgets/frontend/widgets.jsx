//this is our entry file

import React  from 'react';
import ReactDOM from 'react-dom';

import Widget from './widget';

document.addEventListener('DOMContentLoaded', () => { 
  const root = document.getElementById('root');
  // ReactDOM.render(<h1>React is working</h1>, root);
  ReactDOM.render( <Widget />, root);
}); 