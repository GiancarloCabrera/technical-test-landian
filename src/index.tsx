import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/MainPage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Home />
);
