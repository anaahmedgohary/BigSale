import React from 'react'
import $ from "jquery";
import "./landingstyle/landing.css"



export default function Landing()
{
  
  return (
    <div className='homeContainer'>
      

      <div className='welcome-div'>
        <div>
          <button id='close-welcome-div' onClick={() => { $(".welcome-div").slideUp(600)}}>
            {/* <i class="fa-solid fa-circle-xmark fa-xl"></i> */}
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
        </div>
        <div className='short-about'>
          <h1 className='textCenter'>Welcome to BIG SALE</h1>
          <p className='textCenter'>
            We have the best SALES, DISCOUNTS, OFFERS and DEALS in the local market.
          </p>
        </div>
      </div>

      <div className='categories'>

        <div className='category featured-c' onClick={() => { window.location = '/categories/featured' }}>
          <a href="/categories/featured" className='textCenter'>
            Featured
          </a>
        </div>

        <div className='category Laptops-c' onClick={()=>{window.location='/categories/laptops'}}>
          {/* <img src="./src/components/landing/landingstyle/images/2laps.jpg" alt="" /> */}
          {/* <p className='textCenter'>Laptops</p> */}
          <a href="/categories/laptops" className='textCenter'>
            Laptops
          </a>

        </div>

        <div className='category phones-c' onClick={() => { window.location = '/categories/smartphones' }}>
          <a href="/categories/smartphones" className='textCenter'>
            Smart Phones
          </a>
        </div>

        <div className='category desktops-c' onClick={() => { window.location = '/categories/desktops' }}>
          <a href="/categories/desktops" className='textCenter'>
            Desktops
          </a>
        </div>

        <div className='category clothing-c' onClick={() => { window.location = '/categories/clothing' }}>
          <a href="/categories/clothing" className='textCenter'>
            Clothing
          </a>
        </div>

        

        <div className='category medical-c' onClick={() => { window.location = '/categories/medical' }}>
          <a href="/categories/medical" className='textCenter'>
            Medical
          </a>
        </div>
        
      </div>


















    </div>
  )
}
