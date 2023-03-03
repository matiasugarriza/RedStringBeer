import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

import './styles/index.css';
import NavBar from './components/NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/products" element={<ItemListContainer />} />
        <Route exact path="/products/:productId" element={<ItemDetailContainer />} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
