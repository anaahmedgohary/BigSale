import React, { useEffect, useState } from 'react';
import "./headerStyle/header.css";
import bigsale from "/bigsale.ico";

export default function MainHeader()
{
    const [showbar, setShowbar] = useState(false);

    useEffect(() =>
    {
        let sideBarModal = document.querySelector("#sidebar_Container").classList;
        let sideBar = document.querySelector("#sidebar_nav").classList;
        if (showbar)
        {
            sideBarModal.remove("hidden");

            sideBar.remove("sideNavHidden");
            sideBar.remove("slideBar-out");
            sideBar.add("slide-in");

            // sideBarModal.remove("startHidden");
            sideBarModal.remove("slidehide");
            sideBarModal.add("slideshow");
            // sideNavHidden
            
        } else
        {
            // sideBarModal.add("startHidden")
            sideBar.remove("slide-in")
            sideBar.add("slideBar-out")
            // sideBar.add("sideNavHidden")

            sideBarModal.remove("slideshow")
            sideBarModal.add("slidehide")
        }
    }, [showbar]);

    return (

        <div className='Main_header'>
            
            <nav className='main-nav' id='MainNav'>
                <div className='mh-logo-div'>
                    <a href="/">

                        <img src={bigsale} alt="" />
                    </a>
                </div>

                <div className='mh-user-div'>
                    <a href="/user/profile" className='text-white'>
                        <i className="fa-solid fa-circle-user fa-3x"></i>
                    </a>
                </div>

                <ul id='navList'>

                    <li><a href="/categories/featured">Featured</a></li>

                    <li>
                        <a href="/categories/desktops">Desktops</a>
                    </li>
                    <li>
                        <a href="/categories/laptops">Laptops</a>
                    </li>
                    <li><a href="/categories/smartphones">Smartphones</a></li>
                </ul>
            </nav>

            <div className='topFixedBar'>
                {/* <div id='fixedBarTitle'>
                    <a href="/" className='hover:text-orange-400 font-extrabold'>Big Sale</a>
                </div> */}
                <div className='sideBar-btn-div' id='sidebtndiv'>
                    <button className='sideBar-btn' title='Toggle sidebar menu'
                        onClick={() => { setShowbar(!showbar) }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div className='nsb-logo-div'>
                    <a href="/">

                        <img src={bigsale} alt="" />
                    </a>
                </div>

                <div className='nsb-user-div'>
                    <a href="/user/profile" className='text-white'>
                        <i className="fa-solid fa-circle-user fa-3x"></i>
                    </a>
                </div>

            </div>

            <div id='sidebar_Container' className='sidebarContainer_Div hidden'
                onClick={(e) =>
                {
                    if (e.target == document.querySelector("#sidebar_Container"))
                    {
                        setShowbar(false)
                    }
                }}
            >
                

                <div className='sidebar-nav sideNavHidden' id='sidebar_nav'>
                    <div className='sbn_closeBtn'>
                        <button title='Close'
                            onClick={() =>
                            {
                                setShowbar(false)
                            }}
                        >
                            X
                        </button>
                    </div>
                    <ul className='bar-List' id='barList'>
                        <li><a href="/categories/featured">Featured</a></li>
                        <li>
                            <a href="/categories/desktops">Desktops</a>
                        </li>
                        <li>
                            <a href="/categories/laptops">Laptops</a>
                        </li>
                        <li><a href="/categories/smartphones">Smartphones</a></li>
                        <li><a href="/cart">Cart</a></li>

                    </ul>

                </div>
            </div>

        </div>

    )
}
