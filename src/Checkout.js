import React from 'react'
import'./Checkout.css'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_adv' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"' alt=''/>
            <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
            </div>
        </div>
        <div className='checkout_right'> <h2>Subtotal</h2></div>
    </div>
  )
}

export default Checkout