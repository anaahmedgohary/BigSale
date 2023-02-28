import React, { useEffect } from 'react';
import featData from "./featuredData.js";
import ProductsAndCart from 'assets/productcardmap/product&sidecart';
export default function FeaturedDeals()
{
  useEffect(() => { document.title = "Featured Deals" }, []);
  return (<ProductsAndCart data={featData} />)
}