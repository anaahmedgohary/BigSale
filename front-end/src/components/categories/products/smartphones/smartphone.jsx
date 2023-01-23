import React from 'react';
import './style/smartphone.css';
import smartphoneData from './smartphonedata.js';
import ProductsAndCart from 'assets/productcardmap/product&sidecart';
export default function Laptops()
{
    return (<ProductsAndCart data={smartphoneData} />)
}