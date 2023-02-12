import React from 'react';
import featData from "./featuredData.js";
// have to be CapitalLetterFirst for react component
// import ProductsAndCart from 'assets/productcardmap/product&sidecart';
import ProductsAndCart from 'assets/productcardmap/product&sidecart';
export default function FeaturedDeals()
{
  return (<ProductsAndCart data={featData} />)
}