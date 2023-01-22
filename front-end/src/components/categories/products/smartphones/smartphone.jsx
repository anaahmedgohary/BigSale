import React from 'react';
import './style/smartphone.css';
import smartphoneData from './smartphonedata.js';
import ProductPage from 'assets/productcardmap/productPage.jsx';
export default function Laptops()
{
    return (<ProductPage data={smartphoneData} />)
}