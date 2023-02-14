import React, { useState } from 'react';
// import './style/sidecart.css';
// import ChecCartBar from './checkoutcart';
import ChecCartBar from './sidecartbar';
import BarCartCounter from './sidecartcounter';

export default function CheckoutBarCart()
{
    const [sideCart, setSideCart] = useState(false);

    return (
        <>
            {sideCart ? (true) :
                (<div onClick={() => { setSideCart(!sideCart) }}>
                    <BarCartCounter />
                </div>)
            }

            <div onClick={(e) => { if (e.target === document.querySelector('#sideCartDiv')) { setSideCart(!sideCart) } }} id='sideCartDiv' className={`${sideCart ? 'translate-x-0' : 'translate-x-full'}`}>
                <ChecCartBar hideBtn={() => { setSideCart(false) }} />
            </div>
        </>
    )
}
