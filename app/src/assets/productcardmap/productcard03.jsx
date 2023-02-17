import React, { useEffect, useState } from 'react';
import { useCart } from "react-use-cart";
import "./style/cards.css";

export default function ProductCard(props)
{
    const [showDetails, setShowDetails] = useState(false);
    const { addItem } = useCart();
    const providerHref = function getProvider()
    {
        let provider = '/providers';
        props.provider == "Ghazawy" ? provider = '/ghazawy-2' : false;
        props.provider == "Amana" ? provider = '/amana' : false;
        props.provider == "Hyper" ? provider = '/hyper' : false;
        return provider;
    }();

    // useEffect(() =>
    // {
    //     if (showDetails)
    //     {
    //         document.querySelector("#noDetailsDiv").classList.add("detailsRoll");
    //     }

    // }, [showDetails]);

    if (!showDetails)
    {
        return (
            <>
                <ul className='product-card-list'>
                    <li className='img-li'>
                        <img className='product-card-img' src={props.img} alt="product" />
                    </li>
                    <div className='heart-like-div'>
                        <div className='hearts-discount-div'>
                            <div className='hearts-div'>
                                <button>
                                <i className="fa-solid fa-heart heart-like"></i>
                                </button>
                            </div>

                            <p className='text-green-800'>{props.dicountPercent} Discount</p>
                        </div>
                        
                        <div>
                            <p className='line-through italic text-red-400'>{props.originalPrice} L.E</p>
                            <p className='font-medium text-green-800'>{props.price} L.E</p>
                        </div>

                    </div>
                        <li className='item_name'>{props.name}</li>
                        <li className='DetailsToggBtn'>
                        <button className='bg-gray-500 px-5' onClick={(e) =>
                            {
                            // props.setShowDetails(true);
                            let parent = e.target.parentElement.parentElement.parentElement;
                            // console.log(parent);
                            parent.classList.remove("detailsRoll");
                            parent.classList.remove("fadeOut");
                            parent.classList.add("fadeIn");
                            setShowDetails(!showDetails)
                            }}>
                                Details
                            </button>
                        </li>
                    </ul>
                <div className='addOrBuyDiv'>
                    <button
                        onClick={() => addItem(props.item)}
                    >
                        <i className="fa-solid fa-cart-shopping"></i>
                        &nbsp;&nbsp; Add to cart
                    </button>
                </div>

            </>
        )
    }
    return (
        <>
            <ul className='product-card-list'>
                
                <li className='item_name'>{props.name}</li>
                {/* <li>Category: {props.category}</li> */}
                <li>Brand: {props.brand}</li>
                {/* <li>QTY: {props.quantity}</li> */}
                {/* <li>Price After: {props.price}</li> */}
                <li>old Price: {props.originalPrice}</li>
                <li>Discount: {props.dicountPercent}</li>
                <li>NEW Price: {props.price}</li>
                {/* <li>Saving: {props.discount}</li> */}
                <li>Added on: {props.dateAdded}</li>
                <li>Offer Period: {props.period}</li>
                {/* <li>offer Id: {props.id}</li> */}
                {/* <li>
                    Provider: <a href={providerHref} target="_blank" rel="noopener noreferrer">
                        {props.provider}
                    </a>
                </li> */}
                <li className='DetailsToggBtn'>
                    <button onClick={(e) =>
                    {
                        setShowDetails(!showDetails)
                        let parent = e.target.parentElement.parentElement.parentElement;
                        // console.log(parent);
                        parent.classList.remove("detailsSlide");
                        // parent.classList.add("detailsRoll");
                        parent.classList.remove("fadeIn");
                        parent.classList.add("fadeOut");

                        // props.setShowDetails(false);
                    }} className=' bg-gray-500 px-5'>
                        Cover
                    </button>
                </li>
            </ul>

            <div className='addOrBuyDiv'>
                <button
                    onClick={() => addItem(props.item)}
                >
                    <i className="fa-solid fa-cart-shopping"></i>
                    &nbsp;&nbsp; Add to cart
                </button>
            </div>
        </>
    )
}
