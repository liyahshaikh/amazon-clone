import React from 'react'
import "./Products.css"
import StarRateIcon from '@material-ui/icons/StarRate'

function Products() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean startup</p>
                <div className="product__price">
                <small className="page__sign">$</small>
                <strong>19.99</strong>

                <div className="product__rating">
            <StarRateIcon className="product__star"/>
            </div>
            </div>
            
            </div>
            
            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="" className="product__img"/>
            <button className="product__addToBasket">Add To Basket</button>
        </div>
    )
}
 
export default Products
