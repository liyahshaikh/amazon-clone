import React from 'react'
import "./Products.css"
import StarRateIcon from '@material-ui/icons/StarRate'

function Products({id,title, image,price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <div className="product__price">
                <small className="page__sign">$</small>
                <strong>{price}</strong>

                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <StarRateIcon className="product__star"/>
                    ))}
                 </div>
            </div>
            
            </div>
            
            <img src={image} alt="" className="product__img"/>
            <button className="product__addToBasket">Add To Basket</button>
        </div>
    )
}
 
export default Products
