import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {  NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useEffect } from 'react'

const Cart = () => {
  // const {cart} = useSelector((state)=>state)
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [total , setTotal]= useState(0)

  useEffect(()=>{
    setTotal(cartItems.reduce((acc,curr)=>acc + curr.price,0))
  },[cartItems])

  
  return (
    <div>
      {
       
        cartItems.length > 0  ?
        (
          <div>
           <div>
            {
              cartItems.map((item,index)=>{
                return <CartItem key={item.id} item={item} itemindex={index}/>
              })
            }
           </div>
           <div>
            <div>
              <div>your cart</div>
              <div>summary</div>
              <p>
                <span>total item : {cartItems.length}</span>
              </p>
            </div>
            <div><p>  total ${total}</p></div>
           </div>

          </div>
        ):
        (
        <div>
        <h1>cart is empty </h1>
        <NavLink to={'/'} >
        <button> shop now</button>
        </NavLink>
        </div>)

      }
     
    </div>
  )
}  

export default Cart
