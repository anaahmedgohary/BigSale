import React from 'react';
import "./style/cards.css";
import ProductCard from './productcard';

export default function CardsMaker(props) {
  return (
    <div className='card-container'>
      {
        props.data.map((item, index) =>
        {
          return (
            <ProductCard
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
