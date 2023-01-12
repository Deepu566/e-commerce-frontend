import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ item }) => {
    return (
        <Link className='link' to={`/product/${item.id}`}>
            <div className='card'>
                <div className="frame">
                    {item?.attributes.isNew && <span>New Season</span>}
                    <img className='mainImage' src={
                        process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
                    } alt="" />
                    <img className='secondImage' src={
                        process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url
                    } alt="" />
                </div>
                <h2>{item?.attributes.title}</h2>
                <div className="price">
                    <h3>Rs.{item.oldPrice || item?.attributes.price + 2000}</h3>
                    <h3>Rs.{item?.attributes.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card
