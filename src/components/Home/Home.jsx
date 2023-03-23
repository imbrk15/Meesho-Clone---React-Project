import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Product from '../product/Product';

export const Home = ({ onAddCart, onRemoveCart }) => {
    return (
        <div className='hero'>
            <div className='card bg-dark text-white border-0'>
                <img src={require('./image/homepage-img.jpg').default}
                    alt="homepage"
                    className='card-img'
                    height='600px'
                />
            </div>
            <Product onAddCart={onAddCart} onRemoveCart={onRemoveCart} />

        </div>
    )
}
