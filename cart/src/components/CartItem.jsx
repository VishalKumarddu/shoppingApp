import React from 'react'
import {remove} from '../redux/Slices/CartSlice'
import { useDispatch } from 'react-redux'
import './CartItem.css'

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch()
  
  const removeFromCart = () => {
    dispatch(remove(item?.id))
  }

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item?.image} alt={item?.title} />
      </div>
      <div className="item-details">
        <h1 className="item-title">{item?.title}</h1>
        <h1 className="item-description">{item?.description}</h1>
      </div>
      <div className="item-price">
        <p>₹{item?.price}</p>
      </div>
      <div>
        <button className="remove-button" onClick={removeFromCart}>Remove</button>
      </div>
    </div>
  )
}

export default CartItem
