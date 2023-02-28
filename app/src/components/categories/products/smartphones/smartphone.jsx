import React, { useEffect } from 'react';
import './style/smartphone.css';
import smartphoneData from './smartphonedata.js';
import ProductsAndCart from '/src/assets/productcardmap/product&sidecart';
export default function SmartPhones()
{
    useEffect(() => { document.title = "Smart Phones Deals" }, []);
    return (<ProductsAndCart data={smartphoneData} />)
}