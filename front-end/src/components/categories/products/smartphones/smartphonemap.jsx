import React from 'react';
import smartphoneData from './smartphonedata.js';
import ProductMapper from './productmapper.jsx';

export default function SmartphoneMap()
{
    return (
        <div className='smartphone-container'>
            {
                smartphoneData.map((item, index) =>
                {
                    return (
                        <ProductMapper
                            id={item.id}
                            index={index}
                            key={index}
                            img={item.img}
                            name={item.name}
                            category={item.category}
                            brand={item.brand}
                            quantity={item.quantity}
                            price={item.price}
                            originalPrice={item.originalPrice}
                            dicount={item.dicount}
                            dicountPercent={item.dicountPercent}
                            dateAdded={item.dateAdded}
                            period={item.period}
                            item={item}

                        />
                    )
                })
            }

        </div>
    )
}
