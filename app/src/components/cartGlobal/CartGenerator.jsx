import React, { useEffect } from 'react';
import { useCart } from "react-use-cart";
import $ from 'jquery';
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

    useEffect(() =>
    {
        let item_quantity = document.querySelectorAll('.item_quantity')
        item_quantity.forEach(el =>
        {
            let par = el.parentElement.parentElement.parentElement;
            let minB = par.querySelector('.minus-item');
            // console.log(minB)
            //  el.value <= 1 ? minB.style.display = 'none' : minB.style.display = 'inline-block';
            el.value <= 1 ? minB.style.visibility = 'collapse' : minB.style.visibility = 'visible';
        });
    }, [items])

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
                <p>Total items in cart:</p>
                <p id='shaywke'>{totalItems}</p>
            </div>

            <div className='itemsDiv'>
                {
                    items.map((item, index) =>
                    {
                        return (
                            <div key={index} className="itemDiv">
                                <div className='itemDetails'>
                                    <div>
                                        <img src={item.img} alt="product"
                                            className='product-img' />
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

                                    <div className='flex'>
                                        <label>Quantity:</label>
                                        <input className='item_quantity' readOnly value={item.quantity} />

                                    </div>
                                </div>

                                <div className='control-div'>

                                    <div className='addOrMinus'>
                                        <div className='add-item-div'>
                                            <button className=''
                                                onClick={() =>
                                                {
                                                    updateItemQuantity(item.id, item.quantity + 1)
                                                }
                                                }
                                            >
                                                Add  +1</button>
                                        </div>
                                        <div className='minus-item-div'>
                                            <button className='minus-item'
                                                onClick={() =>
                                                {
                                                    updateItemQuantity(item.id, item.quantity - 1);
                                                }}
                                            >
                                                minus -1
                                            </button>
                                        </div>
                                    </div>

                                    <div className='remove-item-div'>
                                        <button
                                            onClick={() =>
                                            {
                                                removeItem(item.id)
                                            }}
                                        >Remove</button>
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

                    <div className='checkoutLink'>
                        <a href="/checkoutcart" className='text-cente'>
                            Checkout
                        </a>
                    </div>

                    <div>
                        <p>Total</p>
                        <p>{cartTotal}</p>
                    </div>
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
