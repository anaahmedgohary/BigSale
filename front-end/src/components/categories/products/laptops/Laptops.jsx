import React from 'react'
import "./style/Laptops.css";
import laptopData from './labtopdata.js';
import ProductPage from 'assets/productcardmap/productPage.jsx';
// test 
import FeaturedDealsTest from 'assets/productcardmap/productComp';
import ProductsAndCart from 'assets/productcardmap/product&sidecart';
export default function Laptops()
{
  return (<ProductsAndCart data={laptopData} />)
}