import React, { useState } from 'react';
// import './style/sidecart.css';
import SideCartBar from './sidecartbar';
import BarCartCounter from './sidecartcounter';

export default function BarCart()
{
    const [sideCart, setSideCart] = useState(false);

    return (
        <>
            {sideCart ?
                (true)
                :
                (<div onClick={() => { setSideCart(!sideCart) }}>
                    <BarCartCounter />
                </div>)
            }

            <div onClick={(e) =>
            {
                if (e.target === document.querySelector('#sideCartDiv'))
                {
                    console.log(SideCartBar)
                    setSideCart(!sideCart)
                }
            }} id='sideCartDiv' className={`${sideCart ? 'translate-x-0' : ' translate-x-[112%]'}`}>
                    <SideCartBar hideBtn={() => { setSideCart(false) }} />
            </div>
        </>
    )
}
