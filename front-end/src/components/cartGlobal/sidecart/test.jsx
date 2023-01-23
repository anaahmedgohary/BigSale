import React, { useState } from 'react';
import { CartProvider } from "react-use-cart";
// import './style/sidecart.css';
import SideCartTemp from './sidecarttemp';
import CartCounter from './newcartcounter';

export default function SideCartTest()
{
    const [sideCart, setSideCart] = useState(false);
    const style = {
        "minHeight": "600px",
        display: "flex",
    }


    return (
        <div className='' style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '400px',
            background: 'darkolivegreen'
            
        }}>
            {sideCart ? (<div>
                
            </div>) : (<div onClick={() => { setSideCart(!sideCart) }}>
                    <CartCounter />
                    <button className='' onClick={() => {setSideCart(!sideCart)}}>
                        {/* <i className="fa-solid fa-bars fa-3x"></i> */}
                        <i className="fa-solid fa-cart-shopping fa-2x"></i>
                </button>
            </div>)}

            <div onClick={(e) => { if (e.target != document.querySelector('#Side_cart')) { setSideCart(!sideCart) }}} id='sideCartDiv' className={`${sideCart ? 'translate-x-0' : 'translate-x-full'}`}>
            <CartProvider>
                    <SideCartTemp hideBtn={() => { setSideCart(false) }} />
            </CartProvider>
            </div>
            
        </div>
    )
}
