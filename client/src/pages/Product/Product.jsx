import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from '../../hooks/useFetch.js';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer.js';

const Product = () => {
  const [selectedImage, setSelectedImage] = useState("img1")
  const [quantity, setQuantity] = useState(1)
  const id = useParams().id
  const dispatch = useDispatch()

  const { data, loading } = useFetch(`/products/${id}?populate=*`)


  return (
    <div className='product'>
      {loading ? "Loading" :
        <div className="left">
          <div className="images">
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img1?.data.attributes?.url} alt="" onClick={(e) => setSelectedImage("img1")} />
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data.attributes?.url} alt="" onClick={(e) => setSelectedImage("img2")} />
          </div>
          <div className="mainImg">
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImage]?.data.attributes?.url} alt="" />
          </div>
        </div>}
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span>{data?.attributes?.price.toFixed(3)}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button onClick={(e) => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={(e) => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className="add" onClick={() => dispatch(addToCart({
          id: data.id,
          title: data.attributes.title,
          desc: data.attributes.desc,
          price: data.attributes.price,
          img1: data.attributes.img1,
          quantity
        }))}>
          <AddShoppingCartIcon /> ADD  TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
          <hr />
        </div>
      </div>
    </div>

  )
}

export default Product