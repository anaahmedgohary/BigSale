import React, { useEffect, useState, useLayoutEffect } from 'react'

import "./headerStyle/header.css";
// import "./sliderStyle/slider.css"
// import headBg from "./headerStyle/image/assetttAsset4.svg";
import $ from "jquery";

// slider images
// import iphone from "./sliderStyle/images/iPhone-13-2.jpg";
// import galaxya from "./sliderStyle/images/galaxyA.jpg";
// import HuaweiP30 from "./sliderStyle/images/Huawei-P30-Pro.jpg";
// import ImgSlider from "./imgslider";

export default function MainHeader()
{

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

    useEffect(() =>
    {
        $("#sidebarContainer").hide();
    }, []);
    
    // useEffect(() =>
    // {
    //     let ooo = $(".slider");

    //    // console.log(ooo)
    //     const animatorslider = (item) =>
    //     {
    //        // item.css("left", "100%");
    //       //  console.log(item);
    //        // let mitem = item;
    //        // mitem.style.left = "200%"
    //     }

    //     for (let o of ooo)
    //     {
    //       //  console.log(o);
    //         setTimeout(animatorslider(o), 500)
    //         //animatorslider
    //     }
        
        
    // })

          

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
                    <li><a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
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
                            <li><a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
                     </ul>    
                 
                 </div>
             </div>
           </div>


            {/* <ImgSlider /> */}











            </header>
        
    )
}
