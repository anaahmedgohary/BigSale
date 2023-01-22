import React from 'react';
import CartCounter from '/src/components/cartGlobal/cartcounter';
import GlobalCart from '/src/components/cartGlobal/globalcart';
import { CartProvider } from "react-use-cart";
import CardsMaker from './cardsmaker';

export default function FeaturedDeals(props)
{
    return (
        <CartProvider>
            <div>
                <CartCounter />
            </div>
            <div className='cardsContainer'>
                <CardsMaker data={props.data} />
            </div>
            <div>
                <GlobalCart />
            </div>
        </CartProvider>
    )
}
