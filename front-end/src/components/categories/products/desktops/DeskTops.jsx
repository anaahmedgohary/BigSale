import React from 'react';
import './style/desktops.css';
import desktopsData from "./destopsData.js";
import ProductsAndCart from 'assets/productcardmap/product&sidecart';
export default function DeskTops()
{
    return (<ProductsAndCart data={desktopsData} />)
}