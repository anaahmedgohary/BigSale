import React, { useEffect } from 'react';
import ClientsMaper from './clientsmaper';
import ClientsData from './clientsdata.js';
import "./style/clients.css";
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
                    ClientsData.map((mall, index) =>
                    {
                        return (
                            <ClientsMaper
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