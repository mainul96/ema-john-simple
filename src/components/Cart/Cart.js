import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const {cart}=props;
    // console.log (cart)
    let total = 0;
    let shipping = 0;
    for (let product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
//   const taxPrice = parseFloat(tax);
  
  const grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className='cart'>
        <h3>Order Summary</h3>
        <h4>selected Item: {cart.length}</h4>
        <p>Total Price:${total}</p>
        <p>Total shipping Charge:{shipping}</p>
        <p>Tax:{tax}</p>
        <p>Grand Total:${grandTotal}</p>
        </div>
    );
};

export default Cart;