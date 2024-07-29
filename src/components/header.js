import '../style.css';
import React from 'react';
import { useState } from 'react';

function Header(){

    const [searchFormActive, setSearchFormActive] = useState(false);
    const [shoppingCartActive, setShoppingCartActive] = useState(false);
    const [loginFormActive, setLoginFormActive] = useState(false);
    const [navbarActive, setNavbarActive] = useState(false);
    
    const handleMenuCLick=()=>{
        setNavbarActive(!navbarActive);
        setSearchFormActive(false);
        setShoppingCartActive(false);
        setLoginFormActive(false);
    }

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

  
    return(<div>
        <header className="header">
            <a href="#" className="logo"><i className="fa-solid fa-basket-shopping"></i>  Grocery Shop</a>
            <nav className={`navbar ${navbarActive ? 'active' : ''}`}>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#products">Products</a>
            <a href="#categories">Caterogories</a>
            <a href="#reviews">Reviews</a>
            <a href="#blogs">Blogs</a>
            <a href="#footer">Contact Us</a>
            </nav>
            <div className="icons">
            <div className="fa fa-bars" id="menu-btn" onClick={handleMenuCLick}></div>
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
                    <img src='' alt="product" />
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
    </header>
    </div>);
}

export default Header;