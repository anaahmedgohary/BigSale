import React from 'react'

import ghazawyOffers from './ghazawyData'

export default function OfferMapper() {
    return (
        
            


            <div className='offers'>
                {
                    ghazawyOffers.map((item, index) =>
                    {
                        return (
                            <div className='offer' key={index}>
                                <ul>
                                    <li>
                                        <img src={item.img} alt="" />
                                    </li>
                                    <li>{item.name}</li>
                                    <li>Category: {item.category}</li>
                                    <li>Brand: {item.brand}</li>
                                    <li>QTY: {item.quantity}</li>
                                    <li>Price After: {item.price}</li>
                                    <li>Price Before: {item.originalPrice}</li>
                                    <li>Dicount: {item.dicount}</li>
                                    <li>Percentage: {item.dicountPercent}</li>
                                    <li>Added on: {item.dateAdded}</li>
                                    <li>Offer Period: {item.period}</li>
                                </ul>
                                <div>
                                    <button>Add To Cart</button>
                                    <p>Or</p>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        )
                    }) 
                }
            </div>
            

       
    )
}
