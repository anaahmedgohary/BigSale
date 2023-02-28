import React, { useEffect, useState } from 'react';
import "./style/cards.css";
import ProductCard from './productcard03';
import AOS from 'aos';
import "/node_modules/aos/dist/aos.css";
export default function CardsMaker(props)
{
  AOS.init({ duration: 600 });
  const [showDetails, setShowDetails] = useState(false);

  // useEffect(() =>
  // {
  //   console.log(showDetails);
  // }, [showDetails])


  return (
    <div className='cards-container'>
      {
        props.data.map((item, index) =>
        {

          if (!showDetails)
          {
            return (
              <div className='cardDivers' key={index} data-aos="fade-up">
                <div className="card_div">

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
                    setShowDetails={setShowDetails}
                  />
                </div>
              </div>
            )
          }

          return (<div key={index}>


            <ProductCard
              id={item.id}
              key={index}
              img={item.img}
              name={item.name}
              dicountPercent={item.dicountPercent}
              period={item.period}
              setShowDetails={setShowDetails}
            />


          </div>)


        })
      }

    </div>
  )
}
