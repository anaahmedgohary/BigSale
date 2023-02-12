import React, { useEffect } from 'react';
import { useCart } from "react-use-cart";
import './style/sidecart.css';

export default function SideCartBar(props)
{
    const {
        isEmpty,
        totalItems,
        totalUniqueItems,
        items,
        cartTotal,
    } = useCart();

    if (isEmpty)
    {
        return (
            <div className='cartSection'>

                <div className='sideCartHeader'>
                    <a href="/cart" title='Go To Cart Page' className='hover:text-cyan-600'>
                        <i className="fa-solid fa-cart-shopping fa-3x"></i>
                    </a>

                    <button className='closeSideCart' onClick={props.hideBtn}>
                        <i className="fa-regular fa-circle-xmark fa-4x transition-all red-400 text-red-600 hover:text-yellow-200 hover:bg-orange-400 rounded-full"></i>
                    </button>
                </div>
                <h1 className='isEmptyCart text-center text-[50px]'>Cart is Empty!</h1>

            </div>
        )
    }

    return (
        <div className='cartSection' id='Side_cart'>
            <div className='sideCartHeader'>
                <a href="/cart" title='Go To Cart Page' className='hover:text-cyan-600'>
                    <i className="fa-solid fa-cart-shopping fa-3x"></i>
                </a>

                <button className='closeSideCart' onClick={props.hideBtn}>
                    <i className="fa-regular fa-circle-xmark fa-4x transition-all red-400 text-red-600 hover:text-yellow-200 hover:bg-orange-400 rounded-full"></i>
                </button>
            </div>
            <div className='itemsInCartDiv'>

                <label>Total items in cart</label>
                <input readOnly value={totalItems} />
            </div>

            <div className='ItemsDiv'>
                {
                    items.map((item, index) =>
                    {
                        return (
                            <div key={index} className="itemDiv">
                                <div className='itemsDetails'>

                                    <div className='detailDiv imgAndName'>
                                        <img src={item.img} alt="product"
                                            className='product-img' />
                                        <input readOnly value={item.name} />
                                    </div>

                                   
                                    {/* <div className='detailDiv'>
                                            <label title='Percentage'>Dicount:</label>
                                            <input readOnly value={item.dicountPercent} />
                                            
                                        </div> */}
                                    <div className='detailDiv'>
                                            <label title='After Discount'>Price AD:</label>
                                            <input className='item_price' readOnly value={item.price} />
                                              
                                        </div>

                                    <div className='detailDiv'>
                                        <label>Quantity:</label>
                                        <input className='item_quantity' readOnly value={item.quantity} />

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
                        <input id='TotalInCart' readOnly value={cartTotal} />
                    </div>
                </div>
            </div>
        </div>
    )
}
