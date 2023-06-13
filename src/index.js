import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import testie from './App';
import App from './App';
import myPassword from './App'
import { backend_link } from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App />
);