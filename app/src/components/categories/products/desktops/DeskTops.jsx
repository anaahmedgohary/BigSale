import React, { useEffect } from 'react';
import './style/desktops.css';
import desktopsData from "./destopsData.js";
// import ProductsAndCart from 'assets/productcardmap/product&sidecart';
import ProductsAndCart from '/src/assets/productcardmap/product&sidecart';

export default function DeskTops()
{
    useEffect(() => { document.title = "Desktops Deals" }, []);
    return (<ProductsAndCart data={desktopsData} />)
}