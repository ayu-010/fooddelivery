import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Placeorder.css'
const Placeorder = () => {
  const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className="place-order">

  <div className="place-order-left">
    <p className="title">
delivery info
    </p>
    <div className="multi-fields">
      <input type="text"  placeholder='First  Nmae'/>
      <input type="text" placeholder='Last name' />
    </div>


    <input type="email" placeholder='Email address'/>
    
    <input type="text" placeholder='Street' />
  

    <div className="multi-fields">
      <input type="text"  placeholder='Citty'/>
      <input type="text" placeholder='State' />
    </div>
    <div className="multi-fields">
      <input type="text"  placeholder='Zip code'/>
      <input type="text" placeholder='Country' />
    </div>

    <input type="text" placeholder='phone' />
    


  </div>
  <div className="place-order-right">
  <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details"><p>SubTotal</p>
            <p>${getTotalCartAmount()}</p></div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>

            </div>
          </div>
            <button>proceed to payment </button>
        </div>
  </div>
  </div>

    </form>
  )
}

export default Placeorder