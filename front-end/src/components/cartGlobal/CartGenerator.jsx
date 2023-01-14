import React from 'react';
import { useCart } from "react-use-cart";

import "./cartstyle/cart.css";

export default function CartGenerator()
{
    const {
        isEmpty,
        totalItems,
        totalUniqueItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty)
    {
        return (
            <div className='isEmptydiv'>
                <h3>Cart is Empty dear!</h3>
            </div>
        )
    }


    return (
        
        <div className='cartCont'>

            <div className='itemsNCartDiv'>
                <p>Total items in cart</p>
                <p id='shaywke'>{totalItems}</p>
            </div>

            <div className='itemsDiv'>
                {
                    items.map((item, index) =>
                    {
                        return (
                            <div key={item.id} id={`${item.id}`} className="itemDiv">
                                <div className='itemDetails'>
                                    <div>
                                        <img src={item.img} alt="" style={{ width: "100px" }} />
                                    </div>

                                    <div>
                                        {item.name}
                                    </div>
                                    <div>
                                        dicount: {item.dicountPercent}
                                    </div>
                                    <div>
                                        NEW price: $ {item.price}
                                    </div>
                                    
                                    <div>
                                    Quantity:  {item.quantity}
                                    </div>
                                </div>

                                <div className='control-div'>
                                    
                                    <div className='add-item-div'>
                                        <button
                                            onClick={() =>
                                            {
                                                updateItemQuantity(item.id, item.quantity + 1)
                                            }
                                            }
                                        >
                                        Add  +1</button>
                                    </div>
                                    <div className='minus-item-div'>
                                        <button
                                            onClick={() =>
                                            {
                                                updateItemQuantity(item.id, item.quantity - 1)
                                            }
                                            }
                                        >
                                            -1
                                        </button>
                                    </div>
                                    <div className='remove-item-div'>
                                        <button
                                            onClick={() =>
                                            {
                                                removeItem(item.id)
                                            }}
                                        >Remove item</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>

            <div className='totalNclearDiv'>

                <div className='totalPrice-div'>
                    <p>Total</p>
                    <p>{cartTotal}</p>
                </div>

                <div className='clearCDiv'>
                    <button
                        onClick={emptyCart}
                    >
                        Clear Cart</button>
                </div>
            </div>






        </div>
        
    )
}
