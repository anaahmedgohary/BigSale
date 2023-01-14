import React from 'react';

import { useCart } from "react-use-cart";

export default function MapperDeOffers(props)
{
    
    const { addItem } = useCart();

  return (
      

      <div className='laptops' key={props.id} id={props.id}>
          <ul key={props.id}>
              <li>
                  <img className='laptop-img' src={props.img} alt="" />
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
