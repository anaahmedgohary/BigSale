import React, { useState, useEffect } from "react";
import { CartProvider } from "react-use-cart";
import BarCart from '/src/assets/productcardmap/cartgenerator/SideCart';

export default function DonePayment()
{
    useEffect(() => { document.title = "Thank You" }, []);
    const [clearCart, setclearCart] = useState(false);

    useEffect(() =>
    {
        if (localStorage.getItem('react-use-cart') && clearCart)
        {
            localStorage.clear("react-use-cart");
            console.log('cart cleared')
            // window.alert('Cart is cleared');
        }
    }, [clearCart])

    return (<CartProvider>
        <BarCart clearCart={clearCart} />

        <div className="DonePayment_C w-full h-screen flex flex-col justify-center align-middle bg-green-200 pt-[80px] pl-[50px] ">
            <div className="m-auto px-6 w-full flex flex-col gap-y-14 justify-center align-middle text-center">

                <span className="text-4xl font-mono italic">
                    Payment Success</span>

                <p className="text-4xl font-mono">
                    Thank You Very Much</p>
            </div>
            <div className="m-auto w-full flex flex-col gap-y-4 justify-center align-middle text-center text-white">

                <button
                    onClick={(e) =>
                    {
                        clearCart ? window.alert("Cart is already empty") : setclearCart(true);
                    }}
                    className={`py-4 px-4 max-w-[240px] m-auto text-lg bg-orange-400 hover:bg-red-400 duration-500 font-extrabold rounded-lg  ${clearCart ? "pointer-events-none opacity-40 bg-slate-600 bg-opacity-40" : "shadow-md shadow-black"}`}
                >
                    Clear Cart</button>

                <a href="/categories/featured"
                    className="py-4 px-4 max-w-[240px] m-auto text-lg bg-blue-400 hover:bg-green-600 duration-300 font-extrabold rounded-lg shadow-md shadow-black"
                >
                    Continue Shopping</a>


            </div>
        </div>
    </CartProvider>)
}