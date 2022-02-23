import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>...</Layout>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
