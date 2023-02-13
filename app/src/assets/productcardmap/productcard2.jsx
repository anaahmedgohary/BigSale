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
                <ul className=''>
                        <li>
                        <img className='main-img' src={props.img} alt="product" />
                        </li>
                        <li className='item_name'>{props.name}</li>
                        <li>Dicount: {props.dicountPercent}</li>
                        <li>Offer Period: {props.period}</li>
                        <li className='DetailsToggBtn'>
                        <button className=' bg-yellow-200 px-5 py-2 flex-grow border border-black' onClick={(e) =>
                            {
                            // props.setShowDetails(true);
                            let parent = e.target.parentElement.parentElement.parentElement;
                            console.log(parent);
                            parent.classList.remove("detailsRoll");
                            parent.classList.add("detailsSlide");
                            parent.classList.remove("fadeOut");
                            parent.classList.add("fadeIn");
                            setShowDetails(!showDetails)
                            }}>
                                Show Details
                            </button>
                        </li>
                    </ul>
                <div className='addOrBuyDiv'>
                    <button
                        onClick={() => addItem(props.item)}
                    >
                        Add To Cart
                    </button>
                </div>

            </>
        )
    }
    return (
        <>
            <ul className=''>
                <li>
                    <img className='main-img' src={props.img} alt="" />
                </li>
                <li className='item_name'>{props.name}</li>
                {/* <li>Category: {props.category}</li> */}
                <li>Brand: {props.brand}</li>
                {/* <li>QTY: {props.quantity}</li> */}
                {/* <li>Price After: {props.price}</li> */}
                <li>old Price: {props.originalPrice}</li>
                <li>Dicount: {props.dicountPercent}</li>
                <li>NEW Price: {props.price}</li>
                {/* <li>Saving: {props.dicount}</li> */}
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
                        parent.classList.add("detailsRoll");
                        parent.classList.remove("fadeIn");
                        parent.classList.add("fadeOut");

                        // props.setShowDetails(false);
                    }} className=' bg-yellow-200 px-5 py-2 flex-grow border border-black'>
                        Hide Details
                    </button>
                </li>
            </ul>

            <div className='addOrBuyDiv'>
                <button
                    onClick={() => addItem(props.item)}
                >
                    Add To Cart
                </button>
            </div>
        </>
    )
}
