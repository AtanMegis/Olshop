import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img1: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Kemeja lengan panjang",
      desc: "Kemeja lengan panjang",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img1: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Kemeja lengan pendek",
      desc: "Kemeja lengan pendek",
      oldPrice: 20,
      price: 13
    },
  ]


  return (
    <div className='cart'>
      {data?.map(item => (
        <div className="item" key={item.id}>
          <img src={item.img1} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              1 x {item.price}
            </div>
          </div>
          <DeleteOutlinedIcon className='delete' />
        </div>
      ))}
      <div className="total">
        <span>SUB TOTAL</span>
        <span>123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span>Reset Cart</span>
    </div>
  )
}

export default Cart