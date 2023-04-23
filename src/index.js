import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/Items/ItemListContainer';
import CheckoutForm from './components/Cart/CheckoutForm';
import NavBar from './components/Menu/NavBar';
import CartContextProvider from './components/Cart/CartContext';
import './firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route exact path="/products/:productId" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/checkout" element={<CheckoutForm />} />
        </Routes> 
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
