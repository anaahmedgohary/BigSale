import React, { useEffect, useState, useLayoutEffect } from 'react'
import "./headerStyle/header.css";
import $ from "jquery";


export default function MainHeader()
{

    useEffect(() =>
    {
        $("#sidebarContainer").hide();
    }, []);
   // function getwwidth(width) { this.width = width };
    const [wwidth, setWwidth] = useState(0);
    useLayoutEffect(() =>
    {
        function updateSize()
        {
            setWwidth(window.innerWidth);
        };
        window.addEventListener("resize", updateSize);
        updateSize();
      //  console.log(`current window width: ${wwidth}`)
        wwidth >= 900 ? ($("#sidebarContainer").hide(), setShowbar(false)) : false;
    })


    const [showbar, setShowbar] = useState(false);
    useEffect(() =>
    {
        function hndleBar()
        {
            showbar ?
                (
                    $("#sidebarContainer").show()
                    , $(".sidebar-nav").animate({ left: "4%" }, 400)
                )
                :
                (
                    $(".sidebar-nav").animate({ left: "-200%" }, 400,
                        () =>
                        { 
                            $("#sidebarContainer").hide()
                        })
                );
        }
        hndleBar();

        $("#sidebarContainer").on("click", (e) =>
        {
            let barList = document.getElementById("barList") || document.querySelector(".bar-List");
            let barDiv = document.querySelector(".sidebar-nav");
            
            if (e.target != barDiv && e.target != barList)
            {
                setShowbar(false);
            }
        })

    }, [showbar]);


    return (
        
        <header className='header'>
            {/* <img className='svg-img' src={headBg} alt="" /> */}

            <nav className='main-nav' id='MainNav'>
                <ul id='navList' className=''>
                    <li><a href="/">Categories</a></li>
                    {/* <li><a href="/" target="_blank" rel="noopener noreferrer">Today</a></li>
                    <li><a href="/" target="_blank" rel="noopener noreferrer">weekly</a></li> */}
                    <li>
                        <a href="/providers">Providers</a>
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

                
            
                <div id='sidebarContainer' className=''>
                    
                    
                    <div className='sidebar-nav'>
                        <ul className='bar-List' id='barList'>
                            <li><a href="/">Categories</a></li>
                            <li>
                                <a href="/providers">Providers</a>
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


            {/* <ImgSlider /> */}











            </header>
        
    )
}
