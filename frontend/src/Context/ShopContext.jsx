import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems(prev => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            console.log(updatedCart); // Log the updated cart here
            return updatedCart;
        });
    }

    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            const updatedCart = { ...prev, [itemId]: Math.max(0, prev[itemId] - 1) };
            console.log(updatedCart); // Log the updated cart here
            return updatedCart;
        });
    }

    const contextValue = { all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;