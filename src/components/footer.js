import '../style.css';
import React from 'react';

function Footer(){

    return(<div>
         <section className="footer" id="footer">
    <div className="box-container">
        <div className="box">
            <h3>Grocery Shop <i className="fa fa-basket-shopping"></i></h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, soluta. Obcaecati ad cupiditate deleniti iure accusantium in vitae, omnis reprehenderit voluptatibus a, distinctio aspernatur veniam? Quae vel porro reiciendis unde!
            </p>
            <div className="share">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-instagram"></a>
                <a href="#" className="fa fa-whatsapp"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <h3>Contact Info</h3>
            <div className="links">
            <a href="#" className="fa fa-links"> <i className="fa fa-phone"></i>+91 1111111111</a>            
            <a href="#" className="fa fa-links"> <i className="fa fa-phone"></i>+91 0000000000</a>            
            <a href="#" className="fa fa-links"> <i className="fa fa-envelope"></i>Groceryshop@info.com</a>            
            <a href="#" className="fa fa-links"> <i className="fa fa-map-marker"></i>Bangalore,In-000000</a>            
            </div>
        </div>

        <div className="box">
            <h3>Quick Links</h3>
            <div className="links">
            <a href="#home" className="fa fa-links"> <i className="fa fa-arrow-right"></i>Home</a>
            <a href="#features" className="fa fa-links"> <i className="fa fa-arrow-right"></i>Features</a>
            <a href="#products" className="fa fa-links"> <i className="fa fa-arrow-right"></i>Products</a>
            <a href="#categories" className="fa fa-links"> <i className="fa fa-arrow-right"></i>categories</a>
            <a href="#reviews" className="fa fa-links"> <i className="fa fa-arrow-right"></i>Reviews</a>
            <a href="#blogs" className="fa fa-links"> <i className="fa fa-arrow-right"></i>Blogs</a>           
            </div>
        </div>
                
        <div className="box">
            <h3>Newsletter</h3>
            <p>Subscribe for latest updates</p>
            <input type="email" placeholder="your email" className="email"/>
            <input type="submit" value="Subscribe" className="btn"/>
            <img src={'./image/payment-logo.webp'} alt=""/>
            <img src={'./image/online-payment.png'} alt=""/>          
        </div>
    </div>

    <div className="credit">
        Created by <span>Manoj P</span>  |  All &copy;rights reserved 
    </div>
</section>
    </div>);
}

export default Footer;