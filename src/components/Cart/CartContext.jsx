import { createContext, useContext, useState } from "react";
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext); //Hook personalizado

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const addToCart = (item, qty) => {  //Agrega el producto al carrito
        const newCartList = cartList.filter(prod => prod.id !== item.id);
        newCartList.push({...item, quantity: qty});
        setCartList(newCartList)
    };
    console.log('carrito: ', cartList)
    const removeList = () => setCartList([]); //Borra todos los productos del carrito
     //Busca si ya existe el producto en el carrito
    const deleteItem = (id) => setCartList(cartList.filter(product => product.id !== id)); //Borra el producto seleccionado
    const totalPrice = () => {
        return cartList.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }
    const totalProducts = () => cartList.reduce((totalQty, productQty) => totalQty + productQty.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            removeList, 
            deleteItem, 
            totalPrice, 
            totalProducts,
            }}>
            { children }
        </CartContext.Provider>
    );
}
export default CartContextProvider;
