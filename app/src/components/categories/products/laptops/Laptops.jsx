import React, { useEffect } from 'react'
import "./style/Laptops.css";
import laptopData from './labtopdata.js';
import ProductsAndCart from 'assets/productcardmap/product&sidecart';
export default function Laptops()
{
  useEffect(() => { document.title = "Laptops Deals" }, []);
  return (<ProductsAndCart data={laptopData} />)
}