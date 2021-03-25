import React from 'react';
import ReactDOM from 'react-dom';
import './src/css/app.scss';
import API from './src/API/API.js';
import { BrowserRouter } from 'react-router-dom';
import App from './src/views/App.jsx';

API.getRequest('https://api.thecatapi.com/v1/images/search', (data) => {
    console.log(data);
})

ReactDOM.render(<App/>, document.querySelector('.rootContainer'));
