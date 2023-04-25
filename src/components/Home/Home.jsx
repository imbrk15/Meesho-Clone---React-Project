import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Product from '../product/Product';
import Footer from '../Footer/Footer';


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
            <p style={{ fontSize: 36, textAlign: 'center' }}>----------------------- Top Categories to choose from -----------------------</p>
            <br />
            <div className=' text-white '>
                <img src={require('./image/MeeshoUpcoming.jpg').default}
                    alt="homepage"
                    className='card-img'
                    height='600px'
                    style={{ width: '80%', marginLeft: 140 }}
                />
            </div>
            <br />

            <div className='text-white border-0'>
                <img src={require('./image/unnamed.jpg').default}
                    alt="homepage"
                    className='card-img'
                    height='600px'
                    style={{ width: '80%', marginLeft: 140 }}
                />
            </div>
            <br />
            <div className='text-white border-0'>
                <img src={require('./image/discount.jpg').default}
                    alt="homepage"
                    className='card-img'
                    height='600px'
                    style={{ width: '80%', marginLeft: 140 }}
                />
            </div>
            <br />
            <div className='text-white border-0'>
                <img src={require('./image/business.jpg').default}
                    alt="homepage"
                    className='card-img'
                    height='600px'
                    style={{ width: '80%', marginLeft: 140 }}
                />
            </div>
            <Product onAddCart={onAddCart} onRemoveCart={onRemoveCart} />
            <Footer />
        </div>
    )
}
