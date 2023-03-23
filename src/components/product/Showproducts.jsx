import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import './Sample.css'


const Showproducts = ({ data, onAddCart, onRemoveCart }) => {
    // const Filter=[data];
    const [Filter, setFilter] = useState(data);
    const productFilter = (cat) => {
        const listUpdate = data.filter((obj) => obj.category === cat);
        setFilter(listUpdate);
    }
    // const navigate = useNavigate();


    // const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    const productData = data;
    const [selectedInd, setSelectedInd] = React.useState(-1);
    const toggle = () => setSelectedInd(-1);
    const modal = selectedInd >= 0 && (productData && productData.length > selectedInd);

    // const handleAddcart = () => {
    //     onAddCart();
    // }
    return (
        <>
            <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>
                    View All
                </button>
                <button className='btn btn-outline-dark me-2' onClick={() => productFilter("women's clothing")}>
                    Women Western
                </button>
                <button className='btn btn-outline-dark me-2' onClick={() => productFilter("jewelery")}>
                    Jwellery & Accessories
                </button>
                <button className='btn btn-outline-dark me-2' onClick={() => productFilter("men's clothing")}>
                    Men
                </button>
                <button className='btn btn-outline-dark me-2'>
                    Beauty & Health
                </button>
                <button className='btn btn-outline-dark me-2'>
                    Bath & Body
                </button>
                <button className='btn btn-outline-dark me-2'>
                    Bags & Footwear
                </button>
                <button className='btn btn-outline-dark me-2'>
                    Home & Kitchen
                </button>
                <button className='btn btn-outline-dark me-2'>
                    Kids
                </button>
                <button className='btn btn-outline-dark me-2' onClick={() => productFilter("electronics")}>
                    Electronics
                </button>
            </div>

            {Filter.map((obj, idx) => (

                <div className='col-md-3 mb-4' onClick={() => handleShow(obj)} variant="light" key={idx}  >
                    <div className='card h-100 text-center p-4 ' key={obj.id} onClick={() => setSelectedInd(idx)}>
                        <img src={obj.image} alt={obj.title} height='250px' className="card-img-top" />
                        <div className='card-body'>
                            <h4 className="card-title mb-0">
                                {obj.title}
                            </h4>
                            <p className="card-text lead fw-bold my-3">₹{obj.price}</p>
                            <p className="card-text lead my-3"> ₹100 discount on 1st order</p>
                            <p className='lead fw-bolder'><FontAwesomeIcon icon={faStar} /> {obj.rating.rate}</p>
                            <span>{obj.rating.count} Reviews</span>
                        </div>
                        <button onClick={() => onAddCart(obj)}>
                            Add to cart
                        </button>
                    </div>
                    {/* <NavLink to='/' onClick={()=>onRemoveCart(obj)}>
                            Remove 
                        </NavLink> */}

                </div>



            ))}
            {
                modal && <Modal show={show} fullscreen={fullscreen} >
                    <Modal.Header closeButton>
                        {/* <Modal.Title>Modal</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body onClick={toggle}>
                        <div className='modal'>
                            <div className='modal-img text-center p-4'>
                                <img src={Filter[selectedInd].image} alt={Filter[selectedInd.title]} />
                                <Button >
                                    Added to cart
                                </Button>
                                {/* <br></br>
                                <Button>
                                    Remove from cart
                                </Button> */}
                            </div>
                            <div>

                            </div>
                            <div className='container'>
                                <div className='price-section'>
                                    <h3>{Filter[selectedInd].title}</h3>
                                    <h2>₹{Filter[selectedInd].price}</h2>
                                    <p> ₹100 discount on 1st order</p>
                                    <h5>{Filter[selectedInd].rating.rate}<FontAwesomeIcon icon={faStar} /> </h5>
                                    <span>{Filter[selectedInd].rating.count} Reviews</span>
                                </div>
                                <div className='select-size'>
                                    <h3>Select Size</h3>
                                    <p className='size'>Free Size</p>
                                </div>
                                <div className='details'>
                                    <h3>Product details</h3>
                                    <p>{Filter[selectedInd].description}</p>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            }
        </>
    )
}
export default Showproducts;