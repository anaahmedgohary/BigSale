import React, { useState, useEffect } from 'react';
import './style/hostedpay.css';
import { CartProvider } from "react-use-cart";

import BarCart from '/src/assets/productcardmap/cartgenerator/SideCart';
import axios from 'axios';

export default function HostedPayment()
{
    useEffect(() => { document.title = "Checkout" }, []);

    const baseURL = import.meta.env.VITE_LOCAL_BASE_URL || "/api";
    const [propTotal, setPropTotal] = useState(0);

    const handelPaySubmit = async (e) =>
    {
        e.preventDefault();

        if (!propTotal || propTotal <= 0 || isNaN(propTotal))
        {
            console.log("No Total Amount Was Found");
            return window.alert("Cart is Empty!");
        }

        try
        {
            axios
                .post(`${baseURL}/payment/paytaps`, { cartTotal: propTotal })
                .then(async respo =>
                {
                    if (await respo.data.redirectUrl)
                    {
                        let paymentPage = await respo.data.redirectUrl;
                        console.log(paymentPage);

                        // localStorage.clear("react-use-cart");
                        window.open(paymentPage, "_blank");
                        // window.location.href = paymentPage;
                    }
                })
                .catch(err => console.log(err));
        } catch (error)
        {
            console.log(error);
        }
    }

    return (

        <CartProvider>
            <BarCart setPropTotal={setPropTotal} />


            <div className='h-screen flex justify-center align-middle pl-[50px]'>

                <div className='Pay_card_form m-auto w-full flex justify-center align-middle'>
                    <form onSubmit={handelPaySubmit} className='card_form flex justify-center align-middle flex-wrap gap-y-9'>

                        <div className='card_form_row'>
                            <label>Total Payment</label>
                            <input id='total_amount_inp' className='text-center' type={'number'} required readOnly name='cartTotal' value={propTotal} />
                        </div>

                        <div className='submit_form_cc  w-full text-center'>
                            <button type='submit' className='w-[200px] h-full'

                            >Pay Now</button>
                        </div>

                    </form>
                </div>




            </div >
        </CartProvider>

    )
}