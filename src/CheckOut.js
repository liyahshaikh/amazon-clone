import React from 'react'
import "./CheckOut.css"
import Subtotal from './Subtotal'
function CheckOut() {
    return (
        <div className="checkOut">
            <div className="checkOut__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkOut__ad"/>
                <h2 className="checkOut__title">Your shopping cart</h2>
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                
            </div>
            <div className="checkOut__right">
                <Subtotal/>
                
            </div>
        </div>
    )
}

export default CheckOut
