import React from 'react'

import "./style/Laptops.css";

// import LaptopsMap from '../../malls/clients/ghazzawy/laptopsmap';
import LaptopsMap from './laptopsmap';
import CartCounter from '../../../cartGlobal/cartcounter';
import GlobalCart from '../../../cartGlobal/globalcart';

import { CartProvider } from "react-use-cart";

export default function Laptops()
{
  return (
    <CartProvider>
      <div>
        <CartCounter />
      </div>
      <div className='LaptopsContainer'>
        <LaptopsMap />
      </div>
      <div>
        <GlobalCart />
      </div>
    </CartProvider>
  )
}
