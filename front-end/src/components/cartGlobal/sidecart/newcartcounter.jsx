import React from 'react'
import "../cartcounter/cartcounter.css"

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
                    <button className='cartIconLink'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>

                    <button className='cartCounter'>
                    {totalItems}
                    </button>
                </div>

            </div>
    </div>
        
  )
}
