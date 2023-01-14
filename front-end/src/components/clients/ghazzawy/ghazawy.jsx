import React from 'react';
import "./ghazawyStyle/ghazawy.css";

import GhazawyMapper from './ghazawyMapper';
import CartCounter from '../../cartGlobal/cartcounter';
import GlobalCart from '../../cartGlobal/globalcart';

import { CartProvider } from "react-use-cart";


export default function GhazawyMall()
{
  return (
    <CartProvider>
        <CartCounter />
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
          <GlobalCart />
        </div>
      </div>
    </CartProvider>
  )
}
