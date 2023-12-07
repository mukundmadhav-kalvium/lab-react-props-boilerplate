import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppClass from './AppClass';
import App from './App';
import { imageData } from './components/DataComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AppClass imageArr = {imageData}/>
    // <App imageData = {imageData}/>   

);