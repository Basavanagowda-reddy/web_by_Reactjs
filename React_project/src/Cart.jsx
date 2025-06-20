import React from 'react';
import './Cart.css';
import Rudrakshi from './Photos/Rudrakshi.avif';
import Wallet from './Photos/Wallet.avif';
import shoes from './Photos/Shoes.avif';
import P1 from './CartImages/1.png';
import P2 from './CartImages/2.png';
import P3 from './CartImages/3.png';
import Pic from './Photos/Shoppy.jpg';

const Cart = () => {
  const handleCouponApply = () => {
    alert('Coupon applied! (Functionality to be added)');
  };

  return (
    <div className="cart-page">
      <section className="cart-banner">
        <img src="https://cdn.pixabay.com/photo/2018/03/15/14/53/e-commerce-3228418_1280.jpg" alt="Cart Banner" className="cart-banner-img" />
      </section>

      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {[{
              img: Rudrakshi,
              desc: 'Shiv Trishul Damru Gold-plated Locket with Rudraksha Mala',
              price: 135
            }, {
              img: Wallet,
              desc: 'PRd PU Tan Casual regular Wallet',
              price: 150
            }, {
              img: shoes,
              desc: 'Aadi Black Casual Shoes',
              price: 449
            }].map(({ img, desc, price }, index) => (
              <tr key={index}>
                <td>
                  <div className="cart-info">
                    <img src={img} alt="product" />
                    <div>
                      <p>{desc}</p>
                      <small>Price: Rs. {price}</small>
                      <br />
                      <a href="#">Remove</a>
                    </div>
                  </div>
                </td>
                <td><input type="number" defaultValue={1} /></td>
                <td>Rs. {price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="coupon-section">
          <input type="text" placeholder="Enter coupon code" className="coupon-input" />
          <button onClick={handleCouponApply} className="coupon-btn">Apply</button>
        </div>

        <div className="total-price">
          <table>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>Rs. 734</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>Rs. 50</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Rs. 40</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>Rs. 824</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <section className="recommended-section">
        <h3>Recommended for You</h3>
        <div className="recommended-items">
          {[Rudrakshi, Wallet, shoes].map((img, idx) => (
            <div key={idx} className="recommended-card">
              <img src={img} alt="Recommended Product" />
              <p>Product Name</p>
              <button className="add-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="form-section">
        <form>
          <span>Leave a Message</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your Email" />
          <input type="text" placeholder="Enter your Subject" />
          <textarea rows="6" placeholder="Your Message"></textarea>
          <button className="submit-btn">Submit</button>
        </form>

        <div className="people-section">
          {[P1, P2, P3].map((img, idx) => (
            <div key={idx} className="person-card">
              <img src={img} alt="person" />
              <p>
                <span>John Doe</span> Senior Marketing Manager <br />
                Phone: +91 1234567890 <br />
                Email: contact@example.com
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div className="newstext">
          <h4>Sign Up for newsletter</h4>
          <p>Lorem ipsum dolor sit amet <span>consectetur</span>.</p>
        </div>
        <div className="form">
          <input type="text" placeholder="your email address" />
          <button className="submit-btn">Sign Up</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-col">
          <img className="logo" src="img/logo.png" alt="logo" />
          <h4>Contact</h4>
          <p><i className="fa fa-home"></i> Lorem ipsum dolor sit</p>
          <p><i className="fa fa-phone"></i> 13569876540</p>
          <p><i className="fa fa-hourglass"></i> 9:00 AM - 6:00 PM</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="footer-col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        <div className="footer-col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src="img/pay/app.jpg" alt="App Store" />
            <img src="img/pay/play.jpg" alt="Google Play" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="img/pay/pay.png" alt="Payment Methods" />
        </div>

        <div className="copyright">
          <p>&copy; 2022, With ❤ Bhandary, Ecommerce Website Template</p>
        </div>
      </footer>
    </div>
  );
};

export default Cart;