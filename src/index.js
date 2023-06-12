import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import testie from './App';
import App from './App';
import myPassword from './App'
import { backend_link } from './App';

export default function getPassword(length) {
    const element = document.querySelector('#post-request .article-id');
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ passLength: length })
};
fetch(backend_link + '/passKey', requestOptions)
.then(response => response.json())
   // .then(data => element.innerHTML = data.id );
    
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App />
);