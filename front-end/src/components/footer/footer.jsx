import React from 'react';
import logo from '/src/assets/images/bg01.png';
import emailimg from '/src/assets/images/footer/email02.png';
import facebook from '/src/assets/images/footer/facebook.png';
import youtube from '/src/assets/images/footer/youtube-logo.png'
import insta from '/src/assets/images/footer/instagram-icon.png'
import tiktok from '/src/assets/images/footer/tiktok.png'
import phone from '/src/assets/images/footer/telephone.png';
import locationpin from '/src/assets/images/footer/placeholder.png'

import './style/footer.css';

export default function MainFooter() {
  return (
    <div>
      <div className='sections-container'>

        <div className='footer-logo-about footerCol'>

          <div className='logo-div'>
            <a href="/" title='Homepage'>
            <img className='logo-img' src={logo} alt="logo" />
            </a>
          </div>
          <div className='about-parag'>
            <p>
              We are proud to provide all the best offers in the local market place.
              To help you save money while maintaining great quality.
            </p>
          </div>
        </div>

        <div className='nav-links-col footerCol'>
          <h4>Site Links</h4>
          <div className='site-links'>
            <a className='site-link' href="/categories/featured">Featured Offers</a>
            {/* <a className='site-link' href="/categories/newoffers">New Offers</a> */}
            <a className='site-link' href="/categories/laptops">Labtops</a>
            <a className='site-link' href="/categories/smartphones">Smartphones</a>
            <a className='site-link' href="/categories/desktops">Desktops</a>
            {/* <a className='site-link' href="/categories/fashion">Fashion</a> */}
          </div>

        </div>

        <div className='contact-us-div footerCol'>
          <h4>Get in touch</h4>
          <div className='contact-link email-div'>
            <p>Email us</p>
            <a href="mailto:xyz@gmail.com:" title='Email us'>
              <img className='link-img' src={emailimg} alt="Email us" />
            </a>
          </div>
          <div className='contact-link email-div'>
            <p>Call us</p>
            <a href="tel:+201001114444">
              <img className='link-img' src={phone} alt="phone us" title='Call us' />
            </a>
          </div>
          <div className='contact-link email-div'>
            <p>Find us</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <img className='link-img' src={locationpin} alt="location" title='Find us' />
            </a>
          </div>
        </div>

        <div className='follow-subscribe footerCol'>

          <div className='followus-div follow-subscribe-col'>
            <h4>Follow us</h4>
            <div className='social-links'>
              <a href="https://www.fb.com" target="_blank" rel="noopener noreferrer">
                <img className='social-link' src={facebook} alt="facebook" title='facebook' />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img className='social-link' src={insta} alt="instagram" title='instagram' />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <img className='social-link' src={tiktok} alt="tiktok" title='tiktok' />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img className='social-link' src={youtube} alt="youtube" title='youtube' />
              </a>
            </div>
          </div>

          <div className='newsletter-div follow-subscribe-col'>
            <h4>Join Newsletter for new offers</h4>
            <form className='newsletter-form'>
              <input className='email-input' type="email" name="email" id="email" required placeholder='Your Email' />
              <input className='sub-input' type="submit" value="Subscribe" />
              {/* <button className='sub-input' type='submit'>Subscribe</button> */}
            </form>
          </div>

        </div>

      </div>
      <div className='All-Rights-div'>
        <p>All Rights Reserved To Full-Stack Web Developer Mr. Ahmed Gohary</p>
      </div>
    </div>
  )
}
