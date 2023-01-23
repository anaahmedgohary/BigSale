import React, { useEffect } from 'react';
import { CartProvider } from "react-use-cart";
import './style/sidecart.css';
import SideCartTemp from './sidecarttemp';
import $ from 'jquery';

export default function SideCart()
{
    
    return (
        <CartProvider>
            
            <div>
                <button>
                    show cart
                </button>
            </div>
            <div id='sideCartDiv'>
                <SideCartTemp />
            </div>
            
        </CartProvider>
    )
}
