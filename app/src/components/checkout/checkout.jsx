import React, { useState, useEffect } from 'react';
import './style/checkout.css';
import { CartProvider } from "react-use-cart";
// import BarCart from 'assets/productcardmap/cartgenerator/SideCart';
// import CheckoutBarCart from 'assets/productcardmap/cartgenerator/checkoutcartbar';
import BarCart from '/src/assets/productcardmap/cartgenerator/SideCart';
// import visa from '/src/assets/images/checkout/visa.png';
import axios from 'axios';

export default function Checkout()
{
    const [propTotal, setPropTotal] = useState(0);


    function HandelSubmit(e)
    {
        e.preventDefault();
        window.alert('Thank You')
        window.location.href = '/';
        axios.post(`https://secure-egypt.paytabs.com/payment/request`, reqBody).then(res =>
        {
            console.log(res)
        }).catch(e => console.log(e))
    };




    

  return (
      <CartProvider>
          <BarCart setPropTotal={setPropTotal} />

          <div className='chechout_container'>
              <div className='totaldiv_cc'>
                  <label htmlFor="">Total Amount:</label>
                  <input id='total_amount_inp' type="number" readOnly value={propTotal} name='first_name' />
              </div>
              
              <div className='payment_section'>
                  <div>
                      <p className='text-center font-serif text-3xl pb-2'>Payment</p>
                  </div>
                  <form id='payment_form' className='card_form' onSubmit={HandelSubmit}>

                      <div className='card_form_row'>
                          <label htmlFor="">Payment Method</label>
                          {/* <input type="text" name=""  required /> */}
                          <select name="paymentMethodType" id="paymentMethodType" required>
                              <option value=""></option>
                              {/* value="" is sent with form */}
                              <option value="card">
                                  Bank Card
                              </option>
                              <option value="ewallet">E-Wallet</option>
                          </select>
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
                              <option value="visa">Meeza</option>
                          </select>
                      </div>

                      <div className='card_form_row'>
                          <label htmlFor="">Card number</label>
                          <input required name='first_name' />
                      </div>

                      <div className='card_form_row'>
                          <label htmlFor="">First name</label>
                          <input required name='first_name' />
                      </div>
                      <div className='card_form_row'>
                          <label htmlFor="">Last name</label>
                          <input required name='first_name' />
                      </div>

                      <div className='card_form_row'>
                          <label htmlFor="">Email</label>
                          <input type="email" name='first_name' />
                      </div>

                      <div className='card_form_row'>
                          <label htmlFor="">Phone</label>
                          <input type='tel' required name='first_name' />
                      </div>

                      <div className='card_form_row'>
                          <label htmlFor="">Expiry Month</label>
                          <select name="expiry_month" id="expiry_month" required onChange={(e) =>
                          {
                              console.log(e.target.value)
                          }}>
                              <option value=""></option>
                              {/* value="" is sent with form */}
                              <option value="01">
                                  01
                              </option>
                              <option value="02">02</option>
                              <option value="03">03</option>
                              <option value="04">04</option>
                              <option value="05">05</option>
                              <option value="06">06</option>
                              <option value="07">07</option>
                              <option value="08">08</option>
                              <option value="09">09</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                          </select>
                      </div>
                      <div className='card_form_row'>
                          <label htmlFor="">Expiry Year</label>
                          <select name="expiry_year" id="expiry_year" required onChange={(e) =>
                          {
                              console.log(e.target.value)
                          }}>
                              <option value=""></option>
                              {/* value="" is sent with form */}
                              <option value="23">
                                  2023
                              </option>
                              <option value="24">2024</option>
                              <option value="25">2025</option>
                              <option value="26">2026</option>
                              <option value="27">2027</option>
                              <option value="28">2028</option>
                              <option value="29">2029</option>
                              <option value="30">2030</option>
                              <option value="31">2031</option>
                              <option value="32">2032</option>
                              <option value="33">2033</option>
                              <option value="34">2034</option>
                          </select>
                      </div>

                      <div className='card_form_row'>
                          <label htmlFor="">CVV</label>
                          <input type="text" maxLength={3} name='cvv' id="cvvPIN" required max={999} inputMode={'numeric'} onChange={(e) =>
                          {
                              if (isNaN(e.target.value))
                              {
                                  e.target.value = ""
                                  console.log(e.target.value);
                                  window.alert("Only Numbers Allowed")
                              }
                          }} />
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
