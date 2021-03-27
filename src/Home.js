import React from 'react'
import './Home.css'
import Products from './Products'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                alt="Amazon Banner" />
            </div>
            <div className="home__row">
                <Products 
                id={197348342783}
                title='The lean startup'
                 price={29.99} 
                 image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                rating={5} />
                <Products 
                id={197346652783}
                image='https://m.media-amazon.com/images/I/61Mo9G7+EkL._AC_UL320_.jpg'
                title='Amazon Basics 14-Piece Kitchen Knife Set with High-Carbon Stainless-Steel Blades and Pine Wood Block'
                price={24.99}
                rating={4} />
                
                
            </div>
            <div className="home__row">
            
                <Products />
                <Products />
                <Products />
            </div>
            <div className="home__row">
                <Products />
                
                
            </div>
            
        </div>
    )
}

export default Home

