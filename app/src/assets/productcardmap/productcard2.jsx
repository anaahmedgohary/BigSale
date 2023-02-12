import React, { useState } from 'react';
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

    if (!showDetails)
    {
        return (
            <div className='mainDiv detailsRoll' key={props.id}>
                    <ul>
                        <li>
                        <img className='main-img' src={props.img} alt="product" />
                        </li>
                        <li>{props.name}</li>
                        <li>Dicount: {props.dicountPercent}</li>
                        <li>Offer Period: {props.period}</li>
                        <li>
                            <button className='showDetailsBtn bg-yellow-200 px-5 py-2 flex-grow border border-black' onClick={() =>
                            {
                                props.showitem;
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

            </div>
        )
    }
    return (
        <div className='mainDiv detailsSlide' key={props.id}>

            <ul>
                <li>
                    <img className='main-img' src={props.img} alt="" />
                </li>
                <li>{props.name}</li>
                <li>Category: {props.category}</li>
                <li>Brand: {props.brand}</li>
                <li>QTY: {props.quantity}</li>
                <li>Price After: {props.price}</li>
                <li>Price Before: {props.originalPrice}</li>
                <li>Saving: {props.dicount}</li>
                <li>Dicount: {props.dicountPercent}</li>
                <li>Added on: {props.dateAdded}</li>
                <li>Offer Period: {props.period}</li>
                <li>offer Id: {props.id}</li>
                <li>
                    Provider: <a href={providerHref} target="_blank" rel="noopener noreferrer">
                        {props.provider}
                    </a>
                </li>
                <li>
                    <button onClick={() =>
                    {
                        props.showitem;
                        setShowDetails(!showDetails)
                    }} className='showDetailsBtn bg-yellow-200 px-5 py-2 flex-grow border border-black'>
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
        </div>
    )
}
