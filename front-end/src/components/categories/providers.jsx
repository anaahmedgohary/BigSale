import React from 'react';
import "./categstyle/categories.css";
// import MallsMaper from './mallsmaper';
// import MallsData from './mallsdata';

import Malls from './malls/malls';

import $ from "jquery";


export default function Providers()
{
    return (
        <div className='ProvidersContainer'>
            {/* <div id='mallsDiv'>
                <div className='mallsHead'>
                    <h2>Malls</h2>
                    <button
                        onClick={(e) => { $(e.target).parents().find("#mallsDiv").slideToggle(2000)}}
                    >Hide</button>
                </div>
                <div className='mallsDiver'>
                    {
                        MallsData.map((mall, index) =>
                        {
                            return (
                                 
                                    <MallsMaper
                                        image={mall.img}
                                        type={mall.type}
                                        name={mall.name}
                                        delivery={mall.delivery}
                                        address={mall.address}
                                        phone={mall.phone}
                                        offers={mall.offers}
                                        key={index}
                                    />
                                
                            )
                        })
                    }
                </div>
            </div> */}

            <Malls/>

        </div>
    )
}
