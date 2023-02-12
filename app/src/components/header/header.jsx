import React, { useEffect, useState } from 'react'
import "./headerStyle/header.css";

export default function MainHeader()
{
    const [showbar, setShowbar] = useState(false);

    useEffect(() =>
    {
        let sideBarModal = document.querySelector("#sidebarContainer").classList;
        let sideBar = document.querySelector(".sidebar-nav").classList;
        if (showbar)
        {
            sideBar.remove("slide-out")
            sideBar.add("slide-in")
            sideBarModal.remove("startHidden")
            sideBarModal.remove("slidehide")
            sideBarModal.add("slideshow")
        } else
        {
            sideBar.remove("slide-in")
            sideBar.add("slide-out")
            sideBarModal.remove("slideshow")
            sideBarModal.add("slidehide")
        }
    }, [showbar]);

    return (

        <header className='header'>
            <nav className='main-nav' id='MainNav'>
                <ul id='navList' className=''>
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

                <div id='sidebarContainer' className='startHidden'
                    onClick={(e) =>
                    {
                        if (e.target == document.querySelector("#sidebarContainer"))
                        {
                            setShowbar(!showbar)
                        }
                    }}
                >

                    <div className='sidebar-nav'>
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

        </header>

    )
}
