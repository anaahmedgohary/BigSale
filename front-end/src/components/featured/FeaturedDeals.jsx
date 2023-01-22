import React from 'react';
import featData from "./featuredData.js";
// have to be CapitalLetterFirst for react component
import ProductPage from 'assets/productcardmap/productPage.jsx';
export default function FeaturedDeals()
{
  return (<ProductPage data={featData} />)
}