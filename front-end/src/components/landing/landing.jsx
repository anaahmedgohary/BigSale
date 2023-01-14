import React from 'react'
import $ from "jquery";
import "./landingstyle/landing.css"



export default function Landing()
{
  
  return (
    <div className='container'>
      

      <div className='welcome-div'>
        <button id='close-welcome-div' onClick={() => { $(".welcome-div").slideUp(600)}}>
          {/* <i class="fa-solid fa-circle-xmark fa-xl"></i> */}
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
        <h1 className='textCenter'>Welcome to BIG SALE</h1>
        <div className='short-about'>
          <p className='textCenter'>
            We have the best SALES, DISCOUNTS, OFFERS and DEALS in the city of ZAGAZIG
          </p>
        </div>
      </div>

      <div className='categories'>

        <div className='category Laptops-c'>
          {/* <img src="./src/components/landing/landingstyle/images/2laps.jpg" alt="" /> */}
          {/* <p className='textCenter'>Laptops</p> */}
          <a href="/categories/laptops" className='textCenter'>
            Laptops
          </a>

        </div>

        <div className='category phones-c'>
          <a href="/categories/laptops" className='textCenter'>
            Smart Phones
          </a>
        </div>

        <div className='category desktops-c'>
          <a href="/categories/laptops" className='textCenter'>
            Desktops
          </a>
        </div>

        <div className='category clothing-c'>
          <a href="/categories/laptops" className='textCenter'>
            Clothing
          </a>
        </div>

        <div className='category featured-c'>
          <a href="/categories/laptops" className='textCenter'>
            Featured
          </a>
        </div>

        <div className='category medical-c'>
          <a href="/categories/laptops" className='textCenter'>
            Medical
          </a>
        </div>
        
      </div>


















    </div>
  )
}
