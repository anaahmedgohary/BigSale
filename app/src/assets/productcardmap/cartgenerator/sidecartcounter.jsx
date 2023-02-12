import React from 'react';
import "./style/cartcounter/cartcounter.css";
import { useCart } from "react-use-cart";
export default function BarCartCounter()
{
    const {
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
