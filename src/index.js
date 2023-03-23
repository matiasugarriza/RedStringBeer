import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import CartContextProvider from './components/CartContext';


//conexion firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzmeKC3saq60Inr6ksLXMCseGYL_h0VSY",
  authDomain: "red-string-beer.firebaseapp.com",
  projectId: "red-string-beer",
  storageBucket: "red-string-beer.appspot.com",
  messagingSenderId: "760923174777",
  appId: "1:760923174777:web:86aa46805762bb9bcf21a8",
  measurementId: "G-GXV610TE8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
