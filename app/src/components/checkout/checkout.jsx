import React, { useState, useEffect } from 'react';
import './style/checkout.css';
import { CartProvider } from "react-use-cart";
// import BarCart from 'assets/productcardmap/cartgenerator/SideCart';
// import CheckoutBarCart from 'assets/productcardmap/cartgenerator/checkoutcartbar';
import BarCart from 'assets/productcardmap/cartgenerator/SideCart';
import visa from 'assets/images/checkout/visa.png';

export default function Checkout()
{
    const [propTotal, setPropTotal] = useState(0);

    function HandelSubmit(e)
    {
        e.preventDefault();
        window.alert('Thank You')
        window.location.href = '/'
    }
    

  return (
      <CartProvider>
          <BarCart setPropTotal={setPropTotal} />

          <div className='chechout_container'>
              <div className='totaldiv_cc'>
                  <label htmlFor="">Total Amount:</label>
                  <input id='total_amount_inp' type="number" readOnly value={propTotal} />
              </div>
              
              <div className='payment_section'>
                  <div>
                      <p className='text-center font-serif text-3xl pb-2'>Payment</p>
                  </div>
                  <form id='payment_form' className='card_form' onSubmit={HandelSubmit}>
                      <div className='card_form_row'>
                          <label htmlFor="">Card number</label>
                          <input required />
                      </div>
                      <div className='card_form_row'>
                          <label htmlFor="">Card type</label>
                          {/* <input type="text" name=""  required /> */}
                          <select name="creditcardtype" id="creditcardtype" required>
                              <option value=""></option>
                              {/* value="" is sent with form */}
                              <option value="Mastercard">
                                  Mastercard
                              </option>
                              <option value="visa">Visa</option>
                          </select>
                      </div>
                      <div className='card_form_row'>
                          <label htmlFor="">Expiry date</label>
                          {/* <input type="number" name=""  required placeholder='YY' /> */}
                          <input type="month" name=""  required placeholder='MM' />
                      </div>
                      <div className='card_form_row'>
                          <label htmlFor="">PIN Code</label>
                          <input type="password" name="password" id="password" required />
                      </div>
                      <div className='card_form_row'>
                          <label htmlFor="">First name</label>
                          <input type="text" name=""  required />
                      </div>
                      <div className='card_form_row'>
                          <label htmlFor="">Last name</label>
                          <input type="text" name=""  required />
                      </div>
                      <div className='card_form_row'>
                          <label htmlFor="">Address</label>
                          <input type="text" name=""  required />
                      </div>
                      <div className='card_form_row'>
                          <label htmlFor="">Email</label>
                          <input type="email" name=""  required />
                      </div>
                      
                      <div className='submit_form_cc'>
                          <input type="submit" value="Submit Payment" />
                      </div>
                  </form>
              </div>
          </div>
    </CartProvider>
  )
}
