import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const Cartitem = ({ product, onRemoveCart, onAddCart }) => {
    return (
        <div key={product.id} className='px-4 my-5 bg-light rounded-3 py-5'>
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={product.image} alt={product.title} height='200px' width='200px' />
                    </div>
                    <div className="col-md-4">
                        <h3>
                            {product.title}
                        </h3>
                        <p className="lead fw-bold">
                            {product.qty} X ₹{product.price} = ₹{product.qty * product.price}
                        </p>
                        <button className='btn btn-outline-dark me-4' onClick={() => onRemoveCart(product)}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <button className='btn btn-outline-dark ' onClick={() => onAddCart(product)}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cartitem;