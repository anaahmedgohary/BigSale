import React, { useEffect, useState } from 'react';
import "./style/mainsidebar.css";
import bigsale from "/bigsale.ico";
import Signup from './signup';
import Login from './login';
import SendMessage from './sendmess';

const Mainsidebar = () =>
{

    const [showMSB, setShowMSB] = useState(false);
    const [showActivator, setShowActivator] = useState(true);

    const [showOptions, setShowOptions] = useState(false);
    const [showOptions1, setShowOptions1] = useState(false);

    const [showSignup, setshowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showMessager, setShowMessager] = useState(false);


    useEffect(() =>
    {
        let msb_container = document.querySelector(".msb_container").classList;
        let msb_container_modal = document.querySelector(".msb_container_modal").classList;
        if (showMSB)
        {
            msb_container_modal.remove('msb_start-hidden')
            msb_container_modal.remove('msb_fadeOut')

            msb_container.remove('msb_start-hidden')
            msb_container.remove('msb_slideOutside')
            msb_container.add('msb_slideInside')
            console.log("yea")

        } else
        {

            msb_container.remove('msb_slideInside')
            msb_container.add('msb_slideOutside')
            console.log("nea")
            msb_container_modal.add('msb_fadeOut')


        }
    }, [showMSB])

    useEffect(() =>
    {
        let SendMessage_cont = document.querySelector(".msb_SendMessage_cont").classList;
        let msb_container = document.querySelector(".msb_main_list").classList;


        if (showMessager)
        {
            msb_container.remove('msb_slideInside')
            msb_container.add('msb_slideOutside')

            SendMessage_cont.remove('msb_start-hidden')
            SendMessage_cont.remove('msb_slideOutside')
            SendMessage_cont.add('msb_slideInside')

        } else
        {
            SendMessage_cont.remove('msb_slideInside')
            SendMessage_cont.add('msb_slideOutside')

            msb_container.remove('msb_slideOutside')
            msb_container.add('msb_slideInside')

        }
    }, [showMessager])

    useEffect(() =>
    {
        let signup_cont = document.querySelector(".msb_signup_cont").classList;
        let msb_container = document.querySelector(".msb_main_list").classList;


        if (showSignup)
        {
            msb_container.remove('msb_slideInside')
            msb_container.add('msb_slideOutside')
            
            signup_cont.remove('msb_start-hidden')
            signup_cont.remove('msb_slideOutside')
            signup_cont.add('msb_slideInside')

        } else
        {
            signup_cont.remove('msb_slideInside')
            signup_cont.add('msb_slideOutside')

            msb_container.remove('msb_slideOutside')
            msb_container.add('msb_slideInside')

        }
    }, [showSignup])

    useEffect(() =>
    {
        let login_cont = document.querySelector(".msb_login_cont").classList;
        let msb_container = document.querySelector(".msb_main_list").classList;


        if (showLogin)
        {
            msb_container.remove('msb_slideInside')
            msb_container.add('msb_slideOutside')

            login_cont.remove('msb_start-hidden')
            login_cont.remove('msb_slideOutside')
            login_cont.add('msb_slideInside')

        } else
        {
            login_cont.remove('msb_slideInside')
            login_cont.add('msb_slideOutside')

            msb_container.remove('msb_slideOutside')
            msb_container.add('msb_slideInside')

        }
    }, [showLogin])

    return (<div>

        <div className={`msb_activator`}>
            <button onClick={() =>
            {
                setShowActivator(!showActivator);
                setShowMSB(!showMSB)
                // console.log("yea")
            }}>
                {/* <i className="fa-solid fa-bars-staggered"></i> */}
                <i className="fa-solid fa-right-to-bracket fa-2x"></i>
            </button>

        </div>

        <div className='msb_container_modal msb_start-hidden'
            onClick={(e) =>
            {
                if (e.target == document.querySelector(".msb_container_modal"))
                {
                    setShowActivator(!showActivator);
                    setShowMSB(false)
                }
            }}
        >


            <div className='msb_container msb_start-hidden'
                onClick={(e) =>
                {
                    if (e.target == document.querySelector(".msb_container"))
                    {
                        if (showOptions)
                        {
                            setShowOptions(!showOptions);
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
                            setShowActivator(!showActivator);
                            setShowMSB(!showMSB)
                            // console.log("yea")
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
                            }}
                        >
                            <i className="fa-solid fa-house fa-2x"></i>
                        </button>
                    </div>

                    <div className='msb_start-hidden msb_signup_cont'>
                        <Signup />
                    </div>

                    {/* Login */}
                    <div className='msb_start-hidden msb_login_cont'>
                        <Login />
                    </div>

                    <div className='msb_start-hidden msb_SendMessage_cont'>
                        <SendMessage />
                    </div>

                    <div className='msb_main_list'>

                        <div className='msb_list_item'>

                            <div className=''>
                                <button
                                    onClick={() =>
                                    {
                                        setShowOptions(false)
                                        setShowOptions1(!showOptions1);
                                    }}
                                >
                                    <i class="fa-solid fa-location-crosshairs"></i>
                                    &nbsp;&nbsp;
                                    Nav
                                </button>
                            </div>
                            <div className={`msp_smallLists ${showOptions1 ? 'msp_slideDown' : 'msp_slideUp'}`}>
                                <button className='msb_closeSLB'
                                    onClick={() =>
                                    {
                                        setShowOptions1(!showOptions1)
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
                                <button
                                    onClick={() =>
                                    {
                                        setShowOptions1(false)
                                        setShowOptions(!showOptions)

                                    }}
                                >
                                    <i class="fa-solid fa-user"></i>
                                    &nbsp;&nbsp;
                                    User
                                </button>
                            </div>
                            <div className={`msp_smallLists ${showOptions ? 'msp_slideDown' : 'msp_slideUp'}`}>
                                <button className='msb_closeSLB'
                                    onClick={() =>
                                    {
                                        setShowOptions(!showOptions)
                                    }}
                                >X</button>
                                <a href="/ufo">Profile</a>
                                <a href="/ufo">Wishlist</a>
                                <a href="/ufo">Settings</a>
                                <a href="/ufo">Log Out</a>
                            </div>
                        </div>



                        <div className='msb_list_item'>

                            <button
                                onClick={() =>
                                {
                                    setshowSignup(true)
                                }}
                            >
                                Signup
                            </button>
                        </div>
                        <div className='msb_list_item'>
                            <button
                                onClick={() =>
                                {
                                    setShowLogin(true)
                                }}
                            >
                                Login
                            </button>
                        </div>
                        <div className='msb_list_item'>
                            <button
                                onClick={() =>
                                {
                                    setShowMessager(true)
                                }}
                            >
                                Contact
                            </button>

                        </div>

                    </div>
                </div>
            </div>



        </div>










    </div>);
}

export default Mainsidebar;
