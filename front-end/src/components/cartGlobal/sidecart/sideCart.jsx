import React, { useEffect } from 'react';
import { CartProvider } from "react-use-cart";
import './style/sidecart.css';
import SideCartTemp from './sidecarttemp';

export default function SideCart()
{
    return (
        <CartProvider>
            <div>
                <SideCartTemp />
            </div>
        </CartProvider>
    )
}
