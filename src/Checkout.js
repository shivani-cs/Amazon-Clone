import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img 
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/amazon/14-USH-Sep-Oct-BAU-Campaign-Obama-DT-PDP-ILM_x2_1300x90_EN_V02._CB415344668_.jpg" 
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <h2>The subtotal will go here.</h2>
      </div>
    </div>
  )
}

export default Checkout
