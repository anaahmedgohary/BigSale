import React, { useEffect, useState } from 'react'
import "./headerStyle/header.css";

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
                <ul id='navList'>
                    <li><a href="/">Categories</a></li>
                    <li>
                        <a href="/categories/desktops">Desktops</a>
                    </li>
                    <li>
                        <a href="/categories/laptops">Laptops</a>
                    </li>
                    <li><a href="/categories/smartphones">Smartphones</a></li>
                    <li><a href="#getInToutch">Contact</a></li>
                </ul>
            </nav>

            <div className='topFixedBar'>
                <div id='fixedBarTitle'>
                    <a href="/" className='hover:text-orange-400 font-extrabold'>Big Sale</a>
                </div>
                <div className='sideBar-btn-div' id='sidebtndiv'>
                    <button className='sideBar-btn' title='Toggle sidebar menu'
                        onClick={() => { setShowbar(!showbar) }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* <div id='sidebar_Container' className='startHidden sidebarContainer'
                    onClick={(e) =>
                    {
                        if (e.target == document.querySelector("#sidebar_Container"))
                        {
                            setShowbar(!showbar)
                        }
                    }}
                >

                    <div className='sidebar-nav' id='sidebar_nav'>
                        <ul className='bar-List' id='barList'>
                            <li><a href="/">Categories</a></li>
                            <li>
                                <a href="/categories/desktops">Desktops</a>
                            </li>
                            <li>
                                <a href="/categories/laptops">Laptops</a>
                            </li>
                            <li><a href="/categories/smartphones">Smartphones</a></li>
                            <li><a href="#getInToutch">Contact</a></li>
                        </ul>

                    </div>
                </div> */}
            </div>

            <div id='sidebar_Container' className='sidebarContainer_Div hidden'
                onClick={(e) =>
                {
                    if (e.target == document.querySelector("#sidebar_Container"))
                    {
                        setShowbar(!showbar)
                    }
                }}
            >

                <div className='sidebar-nav sideNavHidden' id='sidebar_nav'>
                    <ul className='bar-List' id='barList'>
                        <li><a href="/">Categories</a></li>
                        <li>
                            <a href="/categories/desktops">Desktops</a>
                        </li>
                        <li>
                            <a href="/categories/laptops">Laptops</a>
                        </li>
                        <li><a href="/categories/smartphones">Smartphones</a></li>
                        <li><a href="#getInToutch">Contact</a></li>
                    </ul>

                </div>
            </div>

        </div>

    )
}
