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
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    useEffect(() =>
    {
        // sbc-remove-item-div
        let item_quantity = document.querySelectorAll('.sbc-item_quantity')
        item_quantity.forEach(el =>
        {
            let par = el.parentElement.parentElement.parentElement;
            let minB = par.querySelector('.sbc-minus-item-div');
            let removeBtn = par.querySelector('.sbc-remove-item-div');
            
            // el.value <= 1 ? minB.style.visibility = 'collapse' : minB.style.visibility = 'visible';
            el.value <= 1 ? (minB.style.display = 'none', removeBtn.style.display = 'inline-block') : (minB.style.display = 'inline-block', removeBtn.style.display = 'none');
        });
        if (document.querySelector("#total_amount_inp"))
        {
            props.setPropTotal(cartTotal)
        }

    }, [items])

    useEffect(() =>
    {
        if (props.clearCart === true)
        {
            emptyCart();
        }
    }, [props.clearCart])

    if (isEmpty)
    {
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
            <div className='sbc-itemsInCartDiv'>
                    
                    <label>Total items in cart</label>
                    <input readOnly value={totalItems} />
                </div>

            <div className='sbc-ItemsDiv'>
                    {
                        items.map((item, index) =>
                        {
                            return (
                                <div key={index} className="sbc_itemDiv">
                                    <div className='itemsDetails'>

                                        <div className='detailDiv imgAndName'>
                                            <img src={item.img} alt="product"
                                                className='sbc-product-img' />
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

                                        <div className='detailDiv sbc_qtyDiv'>
                                            <label>Quantity:</label>
                                            <input className='sbc-item_quantity' readOnly value={item.quantity} />

                                        </div>
                                    </div>

                                    <div className='controls-div'>

                                        <div className='sbc-addOrMinusDiv'>
                                            <div className='add-item-div'>
                                                <button className=' bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm addplusonebtn'
                                                    onClick={() =>
                                                    {
                                                        updateItemQuantity(item.id, item.quantity + 1);
                                                    }
                                                    }
                                                >
                                                    Add  +1</button>
                                            </div>
                                            <div className='sbc-minus-item-div'>
                                                <button className='minus-item text-sm'
                                                    onClick={() =>
                                                    {
                                                        updateItemQuantity(item.id, item.quantity - 1);
                                                    }}
                                                >
                                                   minus -1
                                                </button>
                                            </div>

                                            <div className='sbc-remove-item-div'>
                                                <button className='text-sm'
                                                    onClick={() =>
                                                    {
                                                        removeItem(item.id);
                                                    }}
                                                >Remove</button>
                                            </div>
                                        </div>
                                        {/* <div className='sbc-remove-item-div'>
                                            <button
                                                onClick={() =>
                                                {
                                                    removeItem(item.id);
                                                }}
                                            >Remove</button>
                                        </div> */}
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>

            <div className='checkoutOrClearDiv'>

                <div className='totalAndCheckout'>
                    <div className='checkoutDiv'>
                        <a href="/checkoutcart">
                            Checkout
                        </a>
                    </div>
                    <div className='sbc-totalPrice-div'>
                        <p>Total</p>
                        <input id='TotalInCart' readOnly value={cartTotal} />
                    </div>
                </div>

                <div className='sbc-clearCDiv'>
                    <button
                        onClick={emptyCart}
                    >
                        Empty Cart</button>
                </div>
            </div>
        </div>
    )
}
