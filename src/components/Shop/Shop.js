import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts]=useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    })
    const handelAddToCart = (product)=>{
        const newProduct = [...cart, product];
        setCart(newProduct);
        addToDb(product.id);
    }
    return (
        <div className='shop'>
            <div className="shop-contianer">
               {
                products.map(product => <Product
                kay={product.id}
                product={product}
                handelAddToCart={handelAddToCart}
                ></Product>)
               }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
                </div>
        </div>
    );
};

export default Shop;