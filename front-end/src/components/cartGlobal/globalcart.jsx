import React from 'react';

import CartGenerator from './CartGenerator';
import "./globalcart/style.css";

const GlobalCart = () => {
    return (
            <div className='cartDiv'>
                <CartGenerator />
            </div>
    );
}

export default GlobalCart;
