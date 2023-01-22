import React from 'react';
import ContainerCart from "./cartProvider";
import CardsMaker from './cardsmaker';

export default function ProductPage(props) {
  return (
      <ContainerCart>
          <CardsMaker data={props.data} />
      </ContainerCart>
  )
}
