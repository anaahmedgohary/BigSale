import React from 'react';
import "./style/ghazawy.css";
import ghazawyOffers from './ghazawyData'
import ProductPage from 'assets/productcardmap/productPage.jsx';
export default function GhazawyMall()
{
  return (<ProductPage data={ghazawyOffers} />)
}