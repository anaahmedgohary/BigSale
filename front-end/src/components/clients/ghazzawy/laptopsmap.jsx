import React from 'react'

import ghazawyData from "./ghazawyData.js";
import MapperDeOffers from './mapperdeoffers.jsx';

export default function LaptopsMap() {
  return (
      <div>
          

          {
              ghazawyData.map((item, index) =>
              {
                  if (item.category === "laptops")
                  {
                      return (
                          
                              <MapperDeOffers
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
                  }
              })
        }


          
    </div>
  )
}
