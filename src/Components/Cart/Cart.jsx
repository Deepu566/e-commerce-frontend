import React from 'react'
import "./Cart.scss"
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
const Cart = () => {
    const products = useSelector(state => state.cart.products)
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price
        })
        return total.toFixed(2);
    }
    const dispatch = useDispatch();
    return (
        <div className='cart'>
            <div className="cart1">
                <h1>Products in your cart</h1>
                {
                    products?.map(item => (
                        <div className="item" key={item.id}>
                            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                            <div className="details">
                                <h2>{item.title}</h2>
                                <p>{item.desc?.substring(0, 50)}</p>
                                <div className="price">{item.quantity}x {item.price}</div>
                            </div>
                            <DeleteIcon onClick={() => dispatch(removeItem(item.id))} className='delete' />
                        </div>
                    ))}
                <div className="total">
                    <span>Subtotal</span>
                    <span>Rs. {totalPrice()}</span>
                </div>

                <button>PROCEED TO CHECKOUT</button>
                <span className="reset" onClick={() => dispatch(resetCart())}>Reset</span>
            </div>
        </div>
    )
}

export default Cart
