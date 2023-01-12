import React from 'react'
import { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
    const id = useParams().id;
    const [index, setIndex] = useState("img")
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
    return (
        <div className='product'>
            {loading
                ? "loading..."
                : (
                    <>
                        <div className="left">
                            <div className="smallImg">
                                <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
                                    onClick={e => setIndex("img")} alt="" />
                                <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
                                    onClick={e => setIndex("img2")} alt="" />
                            </div>
                            <div className="mainImg">
                                <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[index]?.data?.attributes?.url} alt="" />
                            </div>
                        </div>
                        <div className="right">
                            <h1>{data?.attributes.title}</h1>
                            <span className="price">Rs {data?.attributes.price}</span>
                            <p>
                                {data?.attributes.desc}
                            </p>
                            <div className="choose">
                                <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                            </div>

                            <button className="add"
                                onClick={() =>
                                    dispatch(
                                        addToCart({
                                            id: data.id,
                                            title: data.attributes.title,
                                            desc: data.attributes.desc,
                                            price: data.attributes.price,
                                            img: data.attributes.img.data.attributes.url,
                                            quantity,
                                        })
                                    )
                                }>
                                <AddShoppingCartIcon />Add to Cart</button>

                            <div className="link">
                                <div className="item"><FavoriteBorderIcon />Add to favorite</div>
                                <div className="item"><BalanceIcon />Add to compare</div>
                            </div>
                        </div></>)
            }

        </div >
    )
}

export default Product