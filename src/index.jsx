import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {imageData}  from "./component/DataComponent"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App  imageData={imageData}/>   
);