import React from 'react';
import { CartProvider } from "react-use-cart";
import CardsMaker from './cardsmaker';
import BarCart from './cartgenerator/SideCart';

export default function ProductsAndCart(props)
{
    return (
        <CartProvider>
            <BarCart />
            <div className='cardsContainer'>
            <CardsMaker data={props.data} />
            </div>
        </CartProvider>
    )
}