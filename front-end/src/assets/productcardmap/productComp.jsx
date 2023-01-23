import React from 'react';
// import CartCounter from '/src/components/cartGlobal/cartcounter';
// import GlobalCart from '/src/components/cartGlobal/globalcart';
import { CartProvider } from "react-use-cart";
import CardsMaker from './cardsmaker';

// test
import SideCartTest from 'components/cartGlobal/sidecart/test';
import BarCart from './cartgenerator/SideCart';

export default function FeaturedDealsTest(props)
{
    return (
        <CartProvider>
            <div>
                <BarCart />
            </div>
            <div className='cardsContainer'>
                <CardsMaker data={props.data} />
            </div>
            {/* <div>
                <GlobalCart />
            </div> */}
        </CartProvider>
    )
}
