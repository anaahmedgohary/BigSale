import React from 'react';
import { CartProvider } from "react-use-cart";
import CartGenerator from './CartGenerator';
import "./globalcart/style.css";

const GlobalCart = () => {
    return (
        <CartProvider>
            <div className='cartDiv'>
                <CartGenerator />
            </div>
        </CartProvider>
    );
}

export default GlobalCart;
