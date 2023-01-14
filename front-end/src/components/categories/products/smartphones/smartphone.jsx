import React from 'react';
import './style/smartphone.css';
import CartCounter from '/src/components/cartGlobal/cartcounter';
import GlobalCart from '/src/components/cartGlobal/globalcart';
import { CartProvider } from "react-use-cart";
import SmartphoneMap from './smartphonemap';

export default function SmartPhone() {
  return (
      <CartProvider>
          <div>
              <CartCounter />
          </div>
          <div className='smartphoneContainer'>
              <SmartphoneMap/>
          </div>
          <div>
              <GlobalCart />
          </div>
      </CartProvider>
  )
}
