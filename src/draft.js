import logo from './logo.svg';
import './App.css';
import header from './header';
import home from './home';
import features from './features';
import products from './products';
import categories from './categories';
import reviews from './reviews';
import blogs from './blogs';
import footer from './footer';

import { useState } from 'react';


function App() {
    const [searchFormActive, setSearchFormActive] = useState(false);
    const [shoppingCartActive, setShoppingCartActive] = useState(false);
    const [loginFormActive, setLoginFormActive] = useState(false);
    const [navbarActive, setNavbarActive] = useState(false);
  
    const handleSearchClick = () => {
    setSearchFormActive(!searchFormActive);
    setShoppingCartActive(false);
    setLoginFormActive(false);
    setNavbarActive(false);
    };

  const handleCartClick = () => {
    setShoppingCartActive(!shoppingCartActive);
    setSearchFormActive(false);
    setLoginFormActive(false);
    setNavbarActive(false);
  };

  const handleLoginClick = () => {
    setLoginFormActive(!loginFormActive);
    setSearchFormActive(false);
    setShoppingCartActive(false);
    setNavbarActive(false);
  };

  return (
    <div>
      {/* <header className="header">
            <a href="#" className="logo"><i className="fa-solid fa-basket-shopping"></i>  Grocery Shop</a>
            <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#products">Products</a>
            <a href="#categories">Caterogories</a>
            <a href="#reviews">Reviews</a>
            <a href="#blogs">Blogs</a>
            <a href="#footer">Contact Us</a>
            </nav>
            <div className="icons">
            <div className="fa fa-bars" id="menu-btn"></div>
            <div className="fa fa-search" id="search-btn" onClick={handleSearchClick}></div>
            <div className="fa fa-shopping-cart" id="cart-btn" onClick={handleCartClick}></div>
            <div className="fa fa-user" id="login-btn" onClick={handleLoginClick}></div>
            </div>
            <form className={`search-form ${searchFormActive ? 'active' : ''}`} id="formsearch">
                <input type="search" id="search-box" placeholder="search here..." />
                <label htmlFor="search-box" className="fa fa-search"></label>
            </form>

            <div className={`shopping-cart ${shoppingCartActive ? 'active' : ''}`}>
                <div className="box">
                    <i className="fa fa-trash"></i>
                    <img src='./image/Tomato.jpg' alt="Tomato" />
                    <div className="content">
                        <h3>product name</h3>
                        <span className="price">&#8377; 00.0/-</span>
                        <span className="quantity">Qty : 1</span>
                    </div>
                </div>
                <div className="total"> total : &#8377; 00.0/-</div>
                <a href="#" className="btn">Checkout</a>
            </div>

            <form className={`login-form ${loginFormActive ? 'active' : ''}`} id="formlogin">
                <h3>Login Now</h3>
                <input type="email" placeholder="enter email" className="box" />
                <input type="password" placeholder="enter password" className="box" />
                <p>Forgot Your Password <a href="#">Click Here</a></p>
                <p>Don't Have An Account <a href="#">Create Now</a></p>
                <input type="submit" value="Login Now" className="btn" />
            </form> 
    </header> */}
    {/* <section className="home" id="home">
        <div className="content">
            <h3>Products for You</h3>
            <p>shop the products easy and quick, get it delivered to your doorsteps on time</p>
            <a href="#products" className="btn">Shop Now</a>
        </div>
    </section> */}
    {/* <section className="features" id="features">
        <h1 className="heading"> Our <span>Features</span></h1>

        <div className="box-container">
            <div className="box">
                <img src={'./image/features.jpg'} alt=""/>
                <h3>Items</h3>
                <p>All types of daily use grocery's, vegitables and fruits are avialble</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>

        <div className="box-container">
            <div className="box">
                <img src={'./image/free-delivery.jpg'} alt=""/>
                <h3>Delivery</h3>
                <p>Door step delivery on one click</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>

        <div className="box-container">
            <div className="box">
                <img src={'./image/payment1.png'} alt=""/>
                <h3>Make Payments</h3>
                <p>All types of online payments are accepted and also we have COD option</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>  */}
    {/* <section className="products" id="products">
        <h1 className="heading">Our <span>Products</span></h1>
        <div className="product-slider">
            <div className="wrapper">
                <div className="box">
                    <img src={'./image/Tomato.jpg'} alt=""/>
                    <h3>Tomato</h3>
                    <div className="price">&8377 00.0/- - 00.0/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a href="#" className="btn">Add to Cart</a>
                </div>

                <div className="box">
                    <img src={'./image/capsicum.jpg'} alt=""/>
                    <h3>Capsicum</h3>
                    <div className="price">&#8377 00.0/- - 00.0/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a href="#" className="btn">Add to Cart</a>
                </div>

                <div className="box">
                    <img src={'./image/onion.jpg'} alt=""/>
                    <h3>Onion</h3>
                    <div className="price">&#8377 00.0/- - 00.0/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a href="#" className="btn">Add to Cart</a>
                </div>

                <div className="box">
                    <img src={'./image/cucumber.webp'} alt=""/>
                    <h3>Cucumber</h3>
                    <div className="price">&#8377 00.0/- - 00.0/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a href="#" className="btn">Add to Cart</a>
                </div>


                <div className="box">
                    <img src={'./image/carrot.jpg'} alt=""/>
                    <h3>Carrot</h3>
                    <div className="price">&#8377 00.0/- - 00.0/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a href="#" className="btn">Add to Cart</a>
                </div>

                <div className="box">
                    <img src={'./image/Ginger.webp'} alt=""/>
                    <h3>Ginger</h3>
                    <div className="price">&#8377 00.0/- - 00.0/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a href="#" className="btn">Add to Cart</a>
                </div>

                <div className="box">
                    <img src={'./image/galic.jpg'} alt=""/>
                    <h3>Garlic</h3>
                    <div className="price">&#8377 00.0/- - 00.0/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a href="#" className="btn">Add to Cart</a>
                </div>
            </div>
        </div>
    </section> */}
    {/* <section className="categories" id="categories">
        <h1 className="heading">Our <span>Caterogories</span></h1> 
        <div className="box-container">
            <div className="box">
                <img src={'./image/vegitables.jpg'} alt=""/>
                <h3>Fresh Vegitables</h3>
                <p>Upto 50% Off</p>
                <a href="#" className="btn">Shop Now</a>
            </div>

            <div className="box">
                <img src={'./image/fruits.jpg'} alt=""/>
                <h3>Fresh Fruits</h3>
                <p>Upto 50% Off</p>
                <a href="#" className="btn">Shop Now</a>
            </div>

            <div className="box">
                <img src={'./image/grocery.png'} alt=""/>
                <h3>Daily product</h3>
                <p>Upto 50% Off</p>
                <a href="#" className="btn">Shop Now</a>
            </div>

            <div className="box">
                <img src={'./image/meat.jpeg'} alt=""/>
                <h3>Fresh Meat</h3>
                <p>Upto 50% Off</p>
                <a href="#" className="btn">Shop Now</a>
            </div>
        </div>
    </section> */}

    
    {/* <section className="reviews" id="reviews">
        <h1 className="heading">Customer's<span>Reviews</span></h1>
        <div className="review-slider">
            <div className="wrapper">
                <div className=" box">
                    <img src={'./image/profile.jpg'} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius exercitationem reprehenderit pariatur saepe, vitae nostrum laborum! Quaerat aspernatur labore ea consectetur assumenda in alias rerum, vero corporis saepe? Quae?</p>
                    <h3>Manoj P</h3>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>                 
                </div>

                <div className=" box">
                    <img src={''} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius exercitationem reprehenderit pariatur saepe, vitae nostrum laborum! Quaerat aspernatur labore ea consectetur assumenda in alias rerum, vero corporis saepe? Quae?</p>
                    <h3>MP</h3>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>                 
                </div>

                <div className=" box">
                    <img src={''} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius exercitationem reprehenderit pariatur saepe, vitae nostrum laborum! Quaerat aspernatur labore ea consectetur assumenda in alias rerum, vero corporis saepe? Quae?</p>
                    <h3>Manu</h3>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>                 
                </div>

                <div className=" box">
                    <img src={''} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius exercitationem reprehenderit pariatur saepe, vitae nostrum laborum! Quaerat aspernatur labore ea consectetur assumenda in alias rerum, vero corporis saepe? Quae?</p>
                    <h3>tester</h3>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>                 
                </div>
            </div>
        </div>
    </section>  */}
    
    {/* <div className="blogs" id="blogs">
    <h1 className="heading">Our <span>Blog's</span></h1>
    <div className="box-container">
        <div className="box">
            <img src={''} alt=""/>
            <div className="content">
                <div className="icons">
                <a href="#"><i className="fa fa-user"> By User</i></a>
                <a href="#"><i className="fa fa-calendar"> 24-july-2024</i></a>
               </div>
            </div>
            <h3>Good Quality Products</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet alias magnam iure dolor assumenda id illo, deleniti tempore reiciendis velit ex necessitatibus. Facilis quibusdam labore fuga aliquid, quam quis. <a href="#" className="btn">Read More</a></p>
        </div>

            <div className="box">
                <img src={''} alt=""/>
                <div className="content">
                    <div className="icons">
                    <a href="#"><i className="fa fa-user"> By User</i></a>
                    <a href="#"><i className="fa fa-calendar"> 24-july-2024</i></a>
                    </div>
                </div>
                <h3>Good Quality Products</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet alias magnam iure dolor assumenda id illo, deleniti tempore reiciendis velit ex necessitatibus. Facilis quibusdam labore fuga aliquid, quam quis. <a href="#" className="btn">Read More</a></p>
            </div>

               <div className="box">
                    <img src={''} alt=""/>
                    <div className="content">
                        <div className="icons">
                        <a href="#"><i className="fa fa-user"> By User</i></a>
                        <a href="#"><i className="fa fa-calendar"> 24-july-2024</i></a>
                        </div>
                    </div>
                    <h3>Good Quality Products</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet alias magnam iure dolor assumenda id illo, deleniti tempore reiciendis velit ex necessitatibus. Facilis quibusdam labore fuga aliquid, quam quis. <a href="#" className="btn">Read More</a></p>
                </div>

                    <div className="box">
                        <img src={''} alt=""/>
                        <div className="content">
                            <div className="icons">
                            <a href="#"><i className="fa fa-user"> By User</i></a>
                            <a href="#"><i className="fa fa-calendar"> 24-july-2024</i></a>
                            </div>
                        </div>
                        <h3>Good Quality Products</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet alias magnam iure dolor assumenda id illo, deleniti tempore reiciendis velit ex necessitatibus. Facilis quibusdam labore fuga aliquid, quam quis. <a href="#" className="btn">Read More</a></p>
                    </div>
    </div>
 </div> */}
 {/* <section className="footer" id="footer">
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
</section> */}
    </div>
  );
}

export default App;
