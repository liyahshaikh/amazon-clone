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
            
                <Products 
                id={9849207502702}
                image='https://m.media-amazon.com/images/I/71wPLzgLNYL._AC_UL320_.jpg'
                title='Fitbit Inspire 2 Health & Fitness Tracker with a Free 1-Year Fitbit Premium Trial, 24/7 Heart Rate, Black/Black, One Size (S & L Bands Included)'
                price={68.95}
                rating={5}/>
                <Products 
                id={2837915918569813}
                image='https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UL320_.jpg'
                title='Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver'
                price={363.99}
                rating={4}/>
                <Products
                id={948193492}
                image='https://m.media-amazon.com/images/I/61udeFo4l-L._AC_UL320_.jpg'
                title='DOLCE&GABBANA Light Blue Pour Homme Eau de Toilette Spray, 6.7 oz.'
                price={72.99}
                rating={5}
                />



            </div>
            <div className="home__row">
                <Products
                id={2948091284372873}
                image='https://m.media-amazon.com/images/I/81knTG5IfrL._AC_UY218_.jpg'
                title='Jane Eyre: Illustrations by Marjolein Bastin (Marjolein Bastin Classics Series)'
                price={35.99}
                rating={5} />
                
                
            </div>
            
        </div>
    )
}

export default Home

