import React from 'react'
import "./CheckOut.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider';
function CheckOut() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkOut">
            <div className="checkOut__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkOut__ad"/>
                <h2 className="checkOut__title">Your shopping cart</h2>
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}

                    />

                ))}
                
                
            </div>
            <div className="checkOut__right">
                <Subtotal/>
                
            </div>
        </div>
    )
}

export default CheckOut
