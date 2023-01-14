import React, { useEffect, useState } from 'react'

import "./sliderStyle/slider.css"
// import headBg from "./headerStyle/image/assetttAsset4.svg";
import $ from "jquery";

// slider images
import iphone from "./sliderStyle/images/iPhone-13-2.jpg";
import galaxya from "./sliderStyle/images/galaxyA.jpg";
import HuaweiP30 from "./sliderStyle/images/Huawei-P30-Pro.jpg";

export default function imgSlider()
{
    let slidesCount = 0;
    let counter = 0;
    let lista = document.getElementById("sliderlista");
    
    const remyinterva = setInterval(() =>
    {
        let lista = document.getElementById("sliderlista");

        if (slidesCount < 5)
        {
            slidesCount++;
            counter = counter + 96;
            // console.log(counter);
        } else if (slidesCount >= 5)
        {
            counter = 0;
            slidesCount = 0;
            // console.log(slidesCount);
        }

        lista.style.translate = `${counter}px`;
        
    }, 6000);

    function prevSlide()
    {
        if (slidesCount > 0)
        {
            slidesCount--;
            counter -= 96;
            lista.style.translate = `${counter}px`;
        }
    };
    function nextSlide()
    {
        if (slidesCount < 5)
        {
            slidesCount++;
            counter += 96;
            lista.style.translate = `${counter}px`;
        }
    };

  return (
      <div>
          <div className='sliderDiv'>

              <div className='slidersListDiv'>
                  <ul className='slidersList' id='sliderlista'>
                      <li className='slider'>
                          <label htmlFor="iphone">ايفون</label>
                          <a href="/">
                              <img src={iphone} alt="" style={{ width: "50px", height: "50px" }} />
                          </a>
                      </li>
                      <li className='slider'>
                          <label htmlFor="GalaxyA">سامسونج</label>
                          <a href="/">
                              <img src={galaxya} alt="galaxya" style={{ width: "50px", height: "50px" }} />
                          </a>
                      </li>
                      <li className='slider'>
                          <label htmlFor="GalaxyA">هوواوي</label>
                          <a href="/">
                              <img src={HuaweiP30} alt="Huawei P30" style={{ width: "50px", height: "50px" }} />
                          </a>
                      </li>

                      <li className='slider'>
                          <label htmlFor="iphone">ايفون</label>
                          <a href="/">
                              <img src={iphone} alt="iphone 13" style={{ width: "50px", height: "50px" }} />
                          </a>
                      </li>
                      <li className='slider'>
                          <label htmlFor="GalaxyA">سامسونج</label>
                          <a href="/">
                              <img src={galaxya} alt="galaxy A" style={{ width: "50px", height: "50px" }} />
                          </a>
                      </li>
                      <li className='slider'>
                          <label htmlFor="GalaxyA">هوواوي</label>
                          <a href="/">
                              <img src={HuaweiP30} alt="Huawei P30" style={{ width: "50px", height: "50px" }} />
                          </a>
                      </li>
                  </ul>
              </div>

             <div className='navbtndiv'>
                  <button className='navbtn' id='prevbtn'
                      onClick={prevSlide}
                  >prev</button>
                  <button className='navbtn' id='nxtbtn'
                      onClick={nextSlide}
                  >next</button>
             </div>

          </div>
          
    </div>
  )
}
