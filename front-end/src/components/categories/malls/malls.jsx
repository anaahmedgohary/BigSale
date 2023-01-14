import React, { useEffect } from 'react';

import MallsMaper from './mallsmaper';
import MallsData from './mallsdata';

import "./style/malls.css"
import $ from "jquery";


export default function Malls()
{
    useEffect(() =>
    {
        $(".category-map").hide();
    }, [])

    return (
        



            <div id='mallsDiv'>
                <div className='mallsHead'>
                    <h2>Malls</h2>
                    <button title='Show or Hide'
                    onClick={(e) =>
                    {
                        $(".malls-Div").slideToggle(2000);
                        $(e.target).text($(e.target).text() == 'Show' ? 'Hide' : 'Show');
                    }}
                    >Show</button>
                </div>
                <div className='malls-Div category-map'>
                    {
                        MallsData.map((mall, index) =>
                        {
                            return (

                                <MallsMaper
                                    id={mall.id}
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
            </div>



        
    )
}
