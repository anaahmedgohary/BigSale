import React, { useEffect, useState } from 'react';
import "./style/cards.css";
import ProductCard from './productcard2';

export default function CardsMaker(props)
{
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() =>
  {
    console.log(showDetails);
  }, [])


  return (
    <div className='card-container'>
      {
        props.data.map((item, index) =>
        {

          if (showDetails)
          {
            return (<div key={index}>

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
                provider={item.provider}
                item={item}
              />
            </div>)
          }

          return (<div key={index}>


            <ProductCard
              id={item.id}
              key={index}
              img={item.img}
              name={item.name}
              dicount={item.dicount}
              period={item.period}
              showitem={setShowDetails(!showDetails)}
            />


          </div>)


        })
      }

    </div>
  )
}
