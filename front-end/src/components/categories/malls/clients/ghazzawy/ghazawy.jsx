import React from 'react';
import "./ghazawyStyle/ghazawy.css";

import { CartProvider } from "react-use-cart";

// import OfferMapper from './offerMapper';
import GhazawyMapper from './ghazawyMapper';
import CartGenerator from '../../../../cartGlobal/CartGenerator';

export default function Ghazawy() {
  return (
    <CartProvider>
      <div className='GhazawyContainer'>
          
          <div>
            <h1>
                الغزاوي
            </h1> 
          </div>

      <div>
        <GhazawyMapper />
      </div>
      
        <div>
          <CartGenerator />
      </div>


          
      </div>
    </CartProvider>
  )
}
