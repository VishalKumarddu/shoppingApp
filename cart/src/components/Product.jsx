import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';
import './Product.css';

const Product = ({ post }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
  };

  return (
    <div className="product-card">
      <div className="product-info">
        <p className="product-title">{post.title}</p>
        <p className="product-description">{post.description}</p>
        <div className="product-image">
          <img src={post.image} alt={post.title} />
        </div>
        <p className="product-price">₹{post.price}</p>
        {cartItems.some((p) => p.id === post.id) ? (
          <button className="remove-btn" onClick={removeFromCart}>
            Remove from Cart
          </button>
        ) : (
          <button className="add-btn" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
