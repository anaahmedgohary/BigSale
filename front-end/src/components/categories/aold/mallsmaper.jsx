import React from 'react'

export default function MallsMaper(props)
{
    let dafone = `tel:${props.phone}`
    return (

        <div className='mallDiv'>
            <ul>
                <li title='Image'><img src={props.image} alt="mall" /></li>
                <li title='Type'>this is a {props.type}</li>
                <li>Name: {props.name}</li>
                <li>Delivery: {props.delivery}</li>
                <li>Address: {props.address}</li>
                <li title='Call'>Phone: <a href={dafone}>{props.phone}</a></li>
                <li>Offers: {props.offers}</li>
            </ul>
            
        </div>

    )
}
