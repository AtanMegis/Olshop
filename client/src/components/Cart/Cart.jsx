import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer.js';


const Cart = () => {
  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(3)
  };
  return (
    <div className='cart'>
      {products?.map(item => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img1.data.attributes.url} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x Rp {(item.price.toFixed(3))}
            </div>
          </div>
          <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
        </div>
      ))}
      <div className="total">
        <span>SUB TOTAL</span>
        <span>Rp {totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset' onClick={() => dispatch(resetCart())} >Reset Cart</span>
    </div>
  )
}

export default Cart