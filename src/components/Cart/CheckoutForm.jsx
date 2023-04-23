import React, { useState } from "react";
import { addDoc, getFirestore, collection } from 'firebase/firestore'
import { useCartContext } from './CartContext'

import '../../styles/index.css'

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("");
  const { cartList, totalPrice, removeList } = useCartContext();

  const order = {
    buyer: {
      name: name,
      email: email,
      adress: address,
      phone: phone,
      payment: payment,
    },
    items: cartList.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }
  
  const checkOut = (event) => {
    event.preventDefault();
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order)
    removeList()
    setTimeout( function() { window.location.href = "/"; }, 2000 );
    return(
    alert("Felicidades. Tu compra fue confirmada!")
      )
  };

  return (
    <form onSubmit={checkOut}>
      <label>
        Nombre:
        <input 
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <label>
        Correo electrónico:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <label>
        Dirección:
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />
      </label>
      <label>
        Teléfono:
        <input
          type="number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </label>
      <label>
        Forma de pago:
        <input
          type="text"
          value={payment}
          onChange={(event) => setPayment(event.target.value)}
          required
        />
      </label>
      <h3 className='totalPrice'>Total: ${totalPrice()}</h3>
      <button type="submit" onSubmit={checkOut} className='countBtn btn finalizarBtn'>Finalizar Compra</button>
    </form>
  );
};

export default CheckoutForm;