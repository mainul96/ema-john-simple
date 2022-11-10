import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({product, handelAddToCart}) => {
    
//    const {handelAddToCart} = props;
    const {name, img, price, ratings, seller}= product;
    return (
        <div className='product-container'>
            <img src={img} alt=''></img>
            <div className='product-info'>
                <p>{name}</p>
                <p>Price:${price}</p>
                <p>{seller}</p>
                <small><p>Rating:{ratings}</p></small>
            </div>
            <button onClick={()=>handelAddToCart(product)} className='btn-cart'>
               <p className='addToCart-text'>AddToCart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;