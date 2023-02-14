import React, { useEffect, useState } from 'react';
// import './style/sidecart.css';
import SideCartBar from './sidecartbar';
import BarCartCounter from './sidecartcounter';

export default function BarCart()
{
    const [sideCart, setSideCart] = useState(false);

    useEffect(() =>
    {
        let sideCartDiv = document.querySelector("#Side_cart").classList;
        let sideCartCont = document.querySelector("#sideCartCont").classList;

        if (sideCart)
        {
            sideCartCont.remove("cartModalHidden")
            sideCartCont.remove("-right-full")
            sideCartCont.remove("faderout")
            sideCartCont.add("faderBlck")

            sideCartDiv.remove("left-full")
            sideCartDiv.remove("sidecartHidden")
            // sidecartHidden
            sideCartDiv.replace("duration-1000", "duration-500")
            sideCartDiv.add("right-0")
        } else
        {
            sideCartCont.remove("faderBlck")
            sideCartCont.add("faderout")

            sideCartDiv.remove("right-0")
            sideCartDiv.remove("duration-500")
            sideCartDiv.add("duration-1000")
            sideCartDiv.add("sidecartHidden")

        }
    }, [sideCart])

    return (
        <>
            {sideCart ?
                (true)
                :
                (<div onClick={() => { setSideCart(!sideCart) }}>
                    <BarCartCounter />
                </div>)
            }

            <div onClick={(e) =>
            {
                if (e.target === document.querySelector('#sideCartCont'))
                {
                    console.log(SideCartBar)
                    setSideCart(!sideCart)
                }
            }} id='sideCartCont' className="cartModalHidden">
                    <SideCartBar hideBtn={() => { setSideCart(false) }} />
            </div>
        </>
    )
}
