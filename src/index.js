import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import App from './App.js';
import ScrollToTop from './Scroll.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <ScrollToTop />
            <App/>
        </HashRouter>
    </React.StrictMode>,
);

reportWebVitals();