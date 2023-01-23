import React, { useState } from 'react';
// import { CartProvider } from "react-use-cart";
// import './style/sidecart.css';
import SideCartBar from './sidecartbar';
import BarCartCounter from './sidecartcounter';

export default function BarCart()
{
    const [sideCart, setSideCart] = useState(false);

    return (
        <>
            {sideCart ? (true) :
                (<div onClick={() => { setSideCart(!sideCart) }}>
                    <BarCartCounter />
                </div>)
            }

            <div onClick={(e) => { if (e.target === document.querySelector('#sideCartDiv')) { setSideCart(!sideCart) }}} id='sideCartDiv' className={`${sideCart ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* <CartProvider> */}
                    <SideCartBar hideBtn={() => { setSideCart(false) }} />
            {/* </CartProvider> */}
            </div>
            
        </>
    )
}
