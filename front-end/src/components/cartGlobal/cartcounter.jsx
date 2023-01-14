import React from 'react'
import "./cartcounter/cartcounter.css"

import { useCart } from "react-use-cart";

// import $ from "jquery";

export default function CartCounter()
{
    
    const {
        isEmpty,
        totalItems,
    } = useCart();

       
    return (
        <div className='cartcountercontainer'>

            <div className='carticonContainer'>
                <div className='carticonDiv'>
                    <a className='cartIconLink' href="/cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </a>

                    <a className='cartCounter' id='cartCounterId' href="/cart">
                    {totalItems}
                    </a>
                </div>

            </div>
    </div>
        
  )
}
