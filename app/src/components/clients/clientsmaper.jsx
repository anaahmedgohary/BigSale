import React from 'react'
export default function ClientsMaper(props)
{
    return (
        <div className='mallDiv'>
            <ul className='provider-list'>
                <li title='Image'><img src={props.image} alt="mall" /></li>
                <li title='Type'>{props.type}</li>
                <li>Name: {props.name}</li>
                <li>Delivery: {props.delivery}</li>
                <li>Address: {props.address}</li>
                <li title='Call'>Phone: <a className='providerphone' href={`tel:${props.phone}`}>{props.phone}</a></li>
                <li>Offers: {props.offers}</li>
                <li><a className='providerLink' href={props.id}>{ props.name }</a></li>
            </ul>
        </div>
    )
}