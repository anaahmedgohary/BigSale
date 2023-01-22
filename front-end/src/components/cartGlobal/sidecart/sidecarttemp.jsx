import React, { useEffect } from 'react';
import { useCart } from "react-use-cart";
import $ from 'jquery';
import './style/sidecart.css';

export default function SideCart()
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
            <div className='cartSection'>
                <div className='itemsNCartDiv'>
                    <label>Total items in cart</label>
                    <p>{totalItems}</p>
                </div>

                <div className='itemsDiv'>
                    {
                        items.map((item, index) =>
                        {
                            return (
                                <div key={item.id} className="itemDiv">
                                    <div className='itemDetails'>

                                        <div className='detailDiv imgAndName'>
                                            <img src={item.img} alt="product"
                                                className='product-img' />
                                            <input readOnly value={item.name} />
                                        </div>

                                        {/* <div className='detailDiv'>
                                            <input readOnly value={item.name} />
                                        </div> */}
                                        {/* <div className='detailDiv'>
                                            <label title='Percentage'>Dicount:</label>
                                            <input readOnly value={item.dicountPercent} />
                                            
                                        </div> */}
                                        {/* <div className='detailDiv'>
                                            <label title='After Discount'>Price AD:</label>
                                            <input readOnly value={item.price} />
                                              
                                        </div> */}

                                        <div className='detailDiv'>
                                            <label>Quantity:</label>
                                            <input className='item_quantity' readOnly value={item.quantity} />

                                        </div>
                                    </div>

                                    <div className='controls-div'>

                                        <div className='addOrMinusDiv'>
                                            <div className='add-item-div'>
                                                <button className=' bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm addplusonebtn'
                                                    onClick={() =>
                                                    {
                                                        updateItemQuantity(item.id, item.quantity + 1)
                                                    }
                                                    }
                                                >
                                                    Add  +1</button>
                                            </div>
                                            <div className='minus-item-div'>
                                                <button className='rounded-full minus-item'
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

            <div className='checkoutOrClearDiv'>

                <div className='totalAndCheckout'>
                    <div className='totalPrice-div'>
                        <p>Total</p>
                        <input readOnly value={cartTotal} />
                    </div>
                    
                    <div className='checkoutDiv'>
                        <a href="/checkoutcart">
                            Checkout
                        </a>
                    </div>
                </div>

                <div className='clearCDiv'>
                    <button
                        onClick={emptyCart}
                    >
                        Empty</button>
                </div>
            </div>
        </div>
    )
}
