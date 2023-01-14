import React from 'react';
import ghazawyOffers from './ghazawyData';

import MapperDeOffers from './mapperdeoffers';

export default function GhazawyMapper() {
  return (
      <div className='offers'>
          {
              ghazawyOffers.map((item, index) =>
              {
                  return (
                    
                      <MapperDeOffers
                          id={item.id}
                          index={index}
                          key={index}
                          img={item.img }
                          name={item.name}
                          category={item.category }
                          brand={item.brand }
                          quantity={item.quantity}
                          price={item.price}
                          originalPrice={item.originalPrice}
                          dicount={item.dicount }
                          dicountPercent={item.dicountPercent }
                          dateAdded={item.dateAdded }
                          period={item.period}
                          item={item}
                            
                      />
                  )
              })
          }
      </div>
  )
}
