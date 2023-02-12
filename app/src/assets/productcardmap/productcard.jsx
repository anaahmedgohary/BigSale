import React from 'react';
import { useCart } from "react-use-cart";

export default function ProductCard(props)
{
    const { addItem } = useCart();
    const providerHref = function getProvider()
    {
        let provider = '/providers';
        props.provider == "Ghazawy" ? provider = '/ghazawy-2' : false;
        props.provider == "Amana" ? provider = '/amana' : false;
        props.provider == "Hyper" ? provider = '/hyper' : false;
        return provider;
    }();

    return (
        <div className='mainDiv' key={props.id}>
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
                <li>Dicount: {props.dicount}</li>
                <li>Percentage: {props.dicountPercent}</li>
                <li>Added on: {props.dateAdded}</li>
                <li>Offer Period: {props.period}</li>
                <li>offer Id: {props.id}</li>
                <li>
                    Provider: <a href={providerHref} target="_blank" rel="noopener noreferrer">
                        {props.provider}
                    </a>
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
