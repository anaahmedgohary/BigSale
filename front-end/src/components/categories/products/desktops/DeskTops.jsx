import React from 'react';
import './style/desktops.css';
import desktopsData from "./destopsData.js";
import ProductPage from 'assets/productcardmap/productPage.jsx';
export default function DeskTops()
{
    return (<ProductPage data={desktopsData} />)
}