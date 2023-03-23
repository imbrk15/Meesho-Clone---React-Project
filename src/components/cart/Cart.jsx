import React from 'react'
import Cartitem from './Cartitem'
import CheckoutButton from './CheckoutButton'
import Emptycart from './Emptycart'

const Cart = ({ cartItems, onRemoveCart, onAddCart }) => {

    return (
        <div>
            {cartItems?.length === 0 && <Emptycart />}
            {
                cartItems?.length !== 0 &&
                cartItems?.map((obj) => (
                    <>
                        <Cartitem key={obj.id} product={obj} onRemoveCart={onRemoveCart} onAddCart={onAddCart} />
                        {cartItems?.length !== 0 && <CheckoutButton product={obj} />}
                    </>
                ))
            }
        </div>
    )
}
export default Cart;
