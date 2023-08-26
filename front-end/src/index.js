import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home/index.js';
import Inserir from './pages/inserir/index.js';
import Listar from './pages/listar/index.js';



import { BrowserRouter, Routes, Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/listar' element={<Listar/>} />
            <Route path='/inserir' element={<Inserir />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

