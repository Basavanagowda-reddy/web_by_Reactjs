import React, { useState } from 'react'
import "./App.css"
import Logo from "./Photos/Logo.svg"
import { Link } from 'react-router-dom'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // default styles
import { Carousel } from 'react-responsive-carousel';


import Rudrakshi from "./Photos/Rudrakshi.avif"
import Band from "./Photos/Ankleband.avif"
import Wallet from "./Photos/Wallet.avif"
import shoes from "./Photos/Shoes.avif"
import Snapd from "./Photos/Snapd.png"
import Lock from "./Photos/Lock.avif"
import Trust from "./Photos/Trust.png"
import Help from "./Photos/Help.jpg"
import Shop from "./Photos/Shop.jpg"
import Visa from "./Photos/Visa.png"
import Amex from "./Photos/Amex.png"
import Master from "./Photos/Master.png"
import Cod from "./Photos/Cod.png"
import Net from "./Photos/Net.png"

import Face from "./CartImages/facecreame.jpg"
import Gold from "./CartImages/goldchain.jpg"
import leadershoe from "./CartImages/leadthershoe.jpg"
import Web from "./CartImages/website.jpg"
import Alix from "./CartImages/AliExpress1.jpg"
import F3 from "./CartImages/f3.jpg"
import F5 from "./CartImages/f5.jpg"
import shoes5 from "./CartImages/shoes5.jpz.jpg"
import gro from "./CartImages/gro.jpg"






const Shopping = () => {

    
  return (

    
    <div className="header">
     
    <div id='dd3'>
        <div className="logo">
    <img src={Alix} alt="Logo" height={60} width={150} />
  </div>

  <div className="search-bar">
    <input type="text" placeholder="Search products & brands" />
    <button>Search</button>
  </div>

  <div className="header-links">
    <Link to="/cart">🛒 Cart</Link>
    <Link to="/Signup">👤 Sign In</Link>
  </div>
       
    </div>

    
    <div style={{ margin: "20px auto", width: "100%" }}>
  <Carousel
    autoPlay
    infiniteLoop
    showThumbs={false}
    showStatus={false}
    interval={3000}
    transitionTime={1000}
  >
    <div>
      <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="slide1" />
    </div>
    <div>
      <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="slide2" />
    </div>
    <div>
      <img src="https://cdn.pixabay.com/photo/2017/09/09/16/38/vegetables-2732589_1280.jpg" height={730} />
    </div>
  </Carousel>
</div>

    <br /><br /><br />
    <h1>Trending Products </h1>
     <div id='images'>

      {/* **************************************** */}

          <div>
            <img src={Gold} height={250}width={250} alt="" /><br />
            <center> Joyalukkas Gleamed Gold Chain <br />
            <button> Add to Cart </button>
            </center> 
          </div>


           {/* **************************************** */}


          <div>
            <img src={Face } height={250}width={250} alt="" /><br /> 
            <center>Stay Beautiful With facecreame <br />
            <button>Add to Cart</button>
            </center>
          </div>


           {/* **************************************** */}


          <div>
            <img src={Wallet} height={250}width={250} alt="" /><br />
            <center>Stylish Men's wallet <br />
            
            <button>Add to Cart</button>
            </center>
          </div>

           {/* **************************************** */}


          <div>
            <img src={leadershoe} height={250}width={250} alt="" /><br />
            <center>Men's running Shoes <br />
            <button>Add to Cart</button>
            </center>
          </div>
           {/* **************************************** */}
    </div>

    <br /> <br /><br /><br /><br /><br />
     <div id='images'>

      {/* --- --------------------------------------//-------------------------------------------------*/}
      {/* **************************************** */}

          <div>
            <img src={F3} height={250}width={250} alt="" /><br />
            <center> Beatiful sheart <br />
            <button> Add to Cart </button>
            </center> 
          </div>


           {/* **************************************** */}


          <div>
            <img src={gro } height={250}width={250} alt="" /><br /> 
            <center>buy your daily grocery <br />
            <button>Add to Cart</button>
            </center>
          </div>


           {/* **************************************** */}


          <div>
            <img src={shoes5} height={250}width={250} alt="" /><br />
            <center>Stylish Men's Shoes <br />
            
            <button>Add to Cart</button>
            </center>
          </div>

           {/* **************************************** */}


          <div>
            <img src={F5} height={250}width={250} alt="" /><br />
            <center>Men's running shirts  <br />
            <button>Add to Cart</button>
            </center>
          </div>
           {/* **************************************** */}
    </div>
    <br /><br />

    <br /><br />
<h1>More Products You May Like</h1>
<div id='images'>
  <div>
    <img src="https://cdn.pixabay.com/photo/2018/11/02/05/17/headphones-3789598_1280.jpg" height={250} width={250} alt="Bluetooth Headphones" /><br />
    <center>Wireless Bluetooth Headphones <br />
    <button>Add to Cart</button>
    </center>
  </div>

  <div>
    <img src="https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_1280.jpg" height={250} width={250} alt="Smart Watch" /><br />
    <center>Fitness Smart Watch <br />
    <button>Add to Cart</button>
    </center>
  </div>

  <div>
    <img src="https://cdn.pixabay.com/photo/2016/11/29/09/41/bag-1868758_1280.jpg" height={250} width={250} alt="Laptop Bag" /><br />
    <center>Professional Laptop Bag <br />
    <button>Add to Cart</button>
    </center>
  </div>

  <div>
    <img src="https://cdn.pixabay.com/photo/2016/11/29/09/29/woman-1868717_1280.jpg" height={250} width={250} alt="Sunglasses" /><br />
    <center>Stylish UV Sunglasses <br />
    <button>Add to Cart</button>
    </center>
  </div>
</div>



<br /><br />
<h1>Electronics</h1>
<div id='images'>
  <div>
    <img src="https://fhilmart.com/wp-content/uploads/2024/08/Redmi-13-pro-2.jpeg" height={250} width={250} alt="Mobile Phone" /><br />
    <center>Redmi Note 13 Pro 5G<br />
    <button>Add to Cart</button>
    </center>
  </div>

  <div>
    <img src="https://acwo.com/cdn/shop/files/1st_img-POwER-711.webp?v=1731743219" height={250} width={250} alt="Power Bank" /><br />
    <center>Realme Power Bank 20000mAh<br />
    <button>Add to Cart</button>
    </center>
  </div>

  <div>
    <img src="https://images-cdn.ubuy.co.in/66e588053770f362c65f3246-samsung-50-class-du6900-crystal-uhd.jpg" height={250} width={250} alt="Smart TV" /><br />
    <center>Samsung Smart LED TV 43"<br />
    <button>Add to Cart</button>
    </center>
  </div>

  <div>
    <img src="https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_1280.jpg" height={250} width={250} alt="Bluetooth Speaker" /><br />
    <center>boAt Bluetooth Speaker<br />
    <button>Add to Cart</button>
    </center>
  </div>
</div>

<br /><br />
<h1>Fashion</h1>
<div id='images'>
  <div>
    <img src="https://cdn.pixabay.com/photo/2017/11/14/06/18/shirt-2947549_1280.jpg" height={250} width={250} alt="Shirt" /><br />
    <center>Men's Slim Fit Casual Shirt<br />
    <button>Add to Cart</button>
    </center>
  </div>

  <div>
    <img src="https://cdn.pixabay.com/photo/2019/12/24/10/16/cloth-4716455_1280.jpg" height={250} width={250} alt="Women's Dress" /><br />
    <center>Floral Printed Women's Dress<br />
    <button>Add to Cart</button>
    </center>
  </div>

  <div>
    <img src="https://rameshwatch.com/cdn/shop/files/3309QM01_3_720x.webp?v=1741077569" height={250} width={250} alt="Watches" /><br />
    <center>Fastrack Watch for Men<br />
    <button>Add to Cart</button>
    </center>
  </div>

  <div>
    <img src="https://lucaccidesigner.in/images/product/2022/06/golden-belt-reyon-kurty-catalog-2022-06-21_12_05_51.jpeg" height={250} width={250} alt="Women Kurti" /><br />
    <center>Rayon Kurti Combo Set<br />
    <button>Add to Cart</button>
    </center>
  </div>
</div>


    <div>
      <hr /><br /><br />
      <center>
        <img src="https://media.istockphoto.com/id/923079848/photo/online-shopping.jpg?s=1024x1024&w=is&k=20&c=e7TS1ukDwc2Wkyq3lf3QLO8jgsOOsbZDrrruiQwd1aE=" height={500} width={2000} alt="" />
      </center>
      <br /><br />
      <hr />
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div id='Box1'>


      {/* **************************************** */}
     

      <div className='box2'>
        <center><br /><br /><br />
        <a href="https://www.snapdeal.com/page/terms" target='blank'>
        <img src={Lock} height={75} width={75} alt="" />
        </a>
        <h3>100% Secure Payments</h3>
        <h5>Moving your card details to <br />much  more secured place</h5>
        </center>
      </div>

      {/* ****************************************************************** */}

      <div className='box2'>
        <center><br /><br /><br />
        <a href="https://www.aliexpress.com/" target='blank'>
        <img src={Trust} height={75} width={75} alt="" />
        </a>
        <h3>Trust Pay</h3>
        <h5>100% Payment Protection. <br /> Easy Return Policy</h5>
        </center>
      </div>


<br /><br /><br />

      {/* ****************************************************************** */}


      <div className='box2'>
        <center><br /><br /><br />
        <a href="https://www.snapdeal.com/help?redirectFrom=footerstrip" target='blank'>
        <img src={Help} height={75} width={75} alt="" />
        </a>
        <h3>Help Center</h3>
        <h5>Got a question?Look no further. <br />Browse our FAQs or submit your query here </h5>
        </center>
      </div>


      {/* ****************************************************************** */}



      <div className='box2'>
        <center><br /><br /><br />
        <a href="https://play.google.com/store/apps/details?id=com.snapdeal.main&utm_source=web_footer&utm_campaign=android" target='blank'><img src={Shop} height={75} width={75} alt="" />
        </a>
        <h3>Shop on Go</h3>
        <h5>Download the app and get exiting <br /> app only offers at your fingertips </h5>
        </center>
      </div>

      {/* ****************************************************************** */}
    </div>
    <br />

    <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> 



    {/* ******************************************************** */}


     <div className='footer-container'>
      <div className='footer-section'>
        <h2>Payment Options</h2>
        <div className="payment-logos">
          <img src={Visa} alt="Visa" />
          <img src={Amex} alt="Amex" />
          <img src={Master} alt="MasterCard" />
          <img src={Cod} alt="Cash on Delivery" />
          <img src={Net} alt="Net Banking" />
        </div>
      </div>

      <div className='footer-section'>
        <h2>Connect With Us</h2>
        <div className="social-logos">
          <a href="https://www.facebook.com/Snapdeal" target="_blank" rel="noreferrer"><img src="https://i4.sdlcdn.com/img/footer/facebook@4x.png" alt="Facebook" /></a>
          <a href="https://twitter.com/snapdeal" target="_blank" rel="noreferrer"><img src="https://i1.sdlcdn.com/img/footer/twitter@4x.png" alt="Twitter" /></a>
          <a href="https://instagram.com/snapdeal/" target="_blank" rel="noreferrer"><img src="https://i4.sdlcdn.com/img/footer/instagram@4x.png" alt="Instagram" /></a>
          <a href="https://www.linkedin.com/company/snapdeal/" target="_blank" rel="noreferrer"><img src="https://i2.sdlcdn.com/img/footer/linkedin@4x.png" alt="LinkedIn" /></a>
          <a href="https://www.youtube.com/user/snapdeal" target="_blank" rel="noreferrer"><img src="https://i1.sdlcdn.com/img/footer/youtube@4x.png" alt="YouTube" /></a>
          <a href="https://t.me/sdwapp" target="_blank" rel="noreferrer"><img src="https://i4.sdlcdn.com/img/footer/Telegram-Logo_112x112.png" alt="Telegram" /></a>
          <a href="https://wa.me/918130222868?text=Hello%20Snapdeal,%20I%20need%20help" target="_blank" rel="noreferrer"><img src="https://i1.sdlcdn.com/img/footer/whatsapp-logo-112x112.png" alt="WhatsApp" /></a>
        </div>
      </div>

      <p className="copyright">© {new Date().getFullYear()} Snapdeal Clone. All rights reserved.</p>
    </div>
    <br /><br />
    <hr />
    </div>
    
  )
}

export default Shopping





      