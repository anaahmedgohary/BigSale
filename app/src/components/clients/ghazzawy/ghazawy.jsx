import React from 'react';
import "./style/ghazawy.css";
import ghazawyOffers from './ghazawyData'
import ProductsAndCart from '/src/assets/productcardmap/product&sidecart';
export default function GhazawyMall()
{
  return (<ProductsAndCart data={ghazawyOffers} />)
}