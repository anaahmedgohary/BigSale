import React from 'react'
import "./style/Laptops.css";
import laptopData from './labtopdata.js';
import ProductPage from 'assets/productcardmap/productPage.jsx';
export default function Laptops()
{
  return (<ProductPage data={laptopData} />)
}