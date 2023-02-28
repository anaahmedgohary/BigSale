import React, { useEffect, useState } from 'react';
import "./style/mainsidebar.css";
import bigsale from "/bigsale.ico";
import Signup from './signup';
import Login from './login';
import SendMessage from './sendmess';

export default function  MainsSidebar ()
{

    useEffect(() =>
    {
        let Options1 = document.querySelector("#msp_options1").classList;
        let Options2 = document.querySelector("#msp_options2").classList;
        Options1.add("msp_start_slidedUp");
        Options2.add("msp_start_slidedUp");
    }, [])

    const [showMSB, setShowMSB] = useState(false);
    const [showMainList, setShowMainList] = useState("show");

    const [showOptions1, setShowOptions1] = useState(false);
    const [showOptions2, setShowOptions2] = useState(false);
    // useEffect(() =>
    // {
    //     let Options1 = document.querySelector("#msp_options1").classList;
    //     let Options2 = document.querySelector("#msp_options2").classList;
    //     if (!showOptions1)
    //     {
    //         document.querySelector("#msp_options1").classList.add("hidden");
    //     }
    // }, [showOptions1])

    const [showSignup, setshowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showMessager, setShowMessager] = useState(false);


    return (<div>

        <div className={`msb_activator`}>
            <button onClick={() =>
            {
                setShowMSB("show");
            }}>
                {/* <i className="fa-solid fa-bars-staggered"></i> */}
                <i className="fa-solid fa-right-to-bracket fa-2x"></i>
            </button>

        </div>

        <div id='MSB_Container_modal' className={`msb_container_modal ${showMSB == "show" ? "" : showMSB == "hide" ? "msb_fadeOut" : "hidden"}`}
            onClick={(e) =>
            {
                if (e.target == document.querySelector("#MSB_Container_modal"))
                {
                    // setShowActivator(!showActivator);
                    setShowMSB("hide");
                    // setShowMainList("hide");
                }
            }}
        >


            <div id='MSB_Container' className={`msb_container ${showMSB == "show" ? "msb_slideInside" : showMSB == "hide" ? "msb_slideOutside" : "hidden"}`}
                onClick={(e) =>
                {
                    if (e.target == document.querySelector("#MSB_Container"))
                    {
                        if (showOptions2)
                        {
                            setShowOptions2(false);
                        }
                        if (showOptions1)
                        {
                            setShowOptions1(false);
                        }
                    }
                }}
            >

                <div className='msb_header'>
                    <a href="/">
                        <img className='w-20' src={bigsale} alt="logo" />
                    </a>

                    <button
                        onClick={() =>
                        {
                            // setShowActivator(!showActivator);
                            setShowMSB("hide");
                        }}
                    >
                        <i className="fa-solid fa-circle-left fa-2x"></i>
                    </button>
                </div>

                <div>
                    <div className='pb-4'>
                        <button title='Main Options'
                            onClick={() =>
                            {
                                setshowSignup(false);
                                setShowLogin(false);
                                setShowMessager(false);
                                setShowMainList("show");
                                setShowOptions1(false);
                                setShowOptions2(false);
                            }}
                        >
                            <i className="fa-solid fa-house fa-2x"></i>
                        </button>
                    </div>



                    <div id='MSB_main_list' className={`msb_main_list ${showMainList === "show" ? " msb_slideInside" : showMainList === "hide" ? "msb_slideOutside" : "hidden"}`}
                        onClick={(e) =>
                        {
                            let userButton = document.querySelector("#msb_user_btn");
                            let navButton = document.querySelector("#msb_nav_btn");
                            if (e.target !== userButton && e.target !== navButton)
                            {
                                setShowOptions2(false);
                                setShowOptions1(false);
                            }
                        }}
                    >

                        <div className='msb_list_item'>

                            <div>
                                <button id='msb_nav_btn' className='msb_list_item_btn'
                                    onClick={() =>
                                    {
                                        setShowOptions2(false)
                                        setShowOptions1(!showOptions1);
                                    }}
                                >
                                    <i className="fa-solid fa-location-crosshairs"></i>
                                    &nbsp;&nbsp;
                                    Nav
                                </button>
                            </div>
                            <div id='msp_options1' className={`${showOptions1 ? 'msp_smallLists msp_slideDown' : 'msp_slideUpoo'}`}>
                                <button className='msb_closeSLB'
                                    onClick={() =>
                                    {
                                        setShowOptions1(false)
                                    }}
                                >X</button>
                                <a href="/">Home</a>
                                <a href="/categories/featured">Featured</a>
                                <a href="/categories/desktops">Desktops</a>
                                <a href="/categories/laptops">Laptops</a>
                            </div>
                        </div>

                        <div className='msb_list_item'>

                            <div className=''>
                                <button id='msb_user_btn' className='msb_list_item_btn'
                                    onClick={() =>
                                    {
                                        setShowOptions1(false)
                                        setShowOptions2(!showOptions2)

                                    }}
                                >
                                    <i className="fa-solid fa-user"></i>
                                    &nbsp;&nbsp;
                                    User
                                </button>
                            </div>
                            <div id='msp_options2' className={`${showOptions2 ? 'msp_smallLists msp_slideDown' : 'msp_slideUpoo'}`}>

                                <button className='msb_closeSLB'
                                    onClick={() =>
                                    {
                                        setShowOptions2(false)
                                    }}
                                >X</button>
                                <a href="/ufo">Profile</a>
                                <a href="/ufo">Wishlist</a>
                                <a href="/ufo">Settings</a>
                                <a href="/ufo">Log Out</a>
                            </div>
                        </div>



                        <div className='msb_list_item'>

                            <button className='msb_list_item_btn'
                                onClick={() =>
                                {
                                    setShowMainList("hide");
                                    setshowSignup(true);
                                }}
                            >
                                Signup
                            </button>
                        </div>
                        <div className='msb_list_item'>
                            <button className='msb_list_item_btn'
                                onClick={() =>
                                {
                                    setShowMainList("hide");
                                    setShowLogin(true);
                                }}
                            >
                                Login
                            </button>
                        </div>
                        <div className='msb_list_item'>
                            <button className='msb_list_item_btn'
                                onClick={() =>
                                {
                                    setShowMainList("hide");
                                    setShowMessager(true);
                                }}
                            >
                                Contact
                            </button>

                        </div>

                    </div>

                    <div id='MSB_signup_cont' className={`msb_signup_cont ${showSignup ? "msb_slideInside" : "msb_slideOutside"}`}>
                        <Signup />
                    </div>


                    {/* className={`msb_SendMessage_cont ${showSignup ? "msb_slideInside" : "msb_slideOutside"}`} */}

                    {/* Login */}
                    <div className={`msb_login_cont ${showLogin ? "msb_slideInside" : "msb_slideOutside"}`}>
                        <Login />
                    </div>

                    <div className={`msb_SendMessage_cont ${showMessager ? "msb_slideInside" : "msb_slideOutside"}`}>
                        <SendMessage />
                    </div>

                </div>
            </div>



        </div>










    </div>);
}

// export default Mainsidebar;
