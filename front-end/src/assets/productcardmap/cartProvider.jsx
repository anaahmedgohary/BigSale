import React from 'react';
import CartCounter from '/src/components/cartGlobal/cartcounter';
import GlobalCart from '/src/components/cartGlobal/globalcart';
import { CartProvider } from "react-use-cart";

export default function ContainerCart(props)
{
    return (
        <CartProvider>
            <div>
                <CartCounter />
            </div>
            <div className='cardsContainer'>
                {props.children}
            </div>
            <div>
                <GlobalCart />
            </div>
        </CartProvider>
    )
}
