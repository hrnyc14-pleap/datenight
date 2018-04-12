import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render((
  <BrowserRouter>
    <MuiThemeProvider>  
      <App />
    </MuiThemeProvider>
  </BrowserRouter>
), document.getElementById('app'))