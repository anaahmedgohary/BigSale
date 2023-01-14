import React from 'react';
import "./categstyle/categories.css";

import MallsData from '../mallsdata';

export default function Categories() {
  return (
      <div>
          

          <div>
              {
                  MallsData.map((mall, index) =>
                  {
                      return (
                          <div key={index}>
                          <ul>
                              <li><img src={mall.img } alt="mall" /></li>
                              <li>this is a {mall.type }</li>
                              <li>Name: {mall.name }</li>
                              <li>Delivery: {mall.delivery }</li>
                              <li>Address{mall.address }</li>
                              <li>Phone{mall.phone }</li>
                              <li>Offers{mall.offers}</li>
                          </ul>
                          </div>
                      )
                  })
              }
          </div>

    </div>
  )
}
