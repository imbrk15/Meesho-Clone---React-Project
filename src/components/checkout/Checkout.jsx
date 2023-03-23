import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './checkout.css'

export default function Checkout() {
    const [isError, setIsError] = useState(false);
    const nameError_ref = useRef(null);
    const cardNumberError_ref = useRef(null);
    const cvvError_ref = useRef(null);
    const success_ref = useRef(null);
    const price = localStorage.getItem("price");
    const navigate = useNavigate();

    const handlNameonCard = (e) => {
        if (e.target.value.match(/\d+/g)) {
            nameError_ref.current.style.display = "block";
            setIsError(true);
        } else {
            nameError_ref.current.style.display = "none";
            setIsError("false");
        }
    };
    const handleCardNumber = (e) => {
        if (isNaN(+e.target.value)) {
            cardNumberError_ref.current.style.display = "block";
            setIsError(true);
        } else {
            cardNumberError_ref.current.style.display = "none";
            setIsError(false);
        }
    };
    const handleCvv = (e) => {
        if (isNaN(+e.target.value)) {
            cvvError_ref.current.style.display = "block";
            setIsError(true);
        } else {
            cvvError_ref.current.style.display = "none";
            setIsError(false);
        }
    };

    const handlePayment = (e) => {
        e.preventDefault();
        if (!isError) {
            success_ref.current.style.display = "block";
            setTimeout(() => { }, 9000);
        }
    };


    return (
        <div className="checkout-container">
            <h2 className="book-successful" ref={success_ref} >
                Order Placed
            </h2>
            <div className="checkout">
                <div className="left">
                    <h2 className="title">Order Summary</h2>
                    <div className="fare-container">
                        <div className="base-fare d-flex">
                            <span className="title">Total Product Price</span>
                            <span className="price">{price}</span>
                        </div>
                        <div className="total d-flex">
                            <span className="title">Total</span>
                            <span className="price">{price}</span>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <h2 className="title">Payment Method</h2>
                    <div className="payment-container">
                        <form action="#" method='post' onSubmit={handlePayment}>
                            <input
                                type="text"
                                placeholder="Name on card*"
                                maxLength={25}
                                minLength={6}
                                onChange={handlNameonCard}
                                required
                            />
                            <div className="error" ref={nameError_ref}>
                                Please Enter a valid Name
                            </div>
                            <input
                                type="text"
                                name=''
                                id=''
                                maxLength={16}
                                minLength={16}
                                placeholder='Card Number'
                                onChange={handleCardNumber}
                                required
                            />
                            <div className="error" ref={cardNumberError_ref}>
                                Please Enter a Valid number
                            </div>
                            <input type="month" required />
                            <input
                                type="text"
                                name='cvv'
                                placeholder='cvv'
                                minLength={3}
                                maxLength={3}
                                onChange={handleCvv}
                                required
                            />
                            <div className="error" ref={cvvError_ref}>
                                please enter a valid cvv

                            </div>
                            <input type="submit" value='pay' />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
