import '../style.css';
import React from 'react';
import Slider from 'react-slick';

function Products(){
    const settings = {
        dots: true,
        loop:true,
        infinite: true,
        speed: 200,
        spaceBetween:10,
        slidesToShow: 6, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        effect:'slide',
        disableOnInteraction:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(<div>
        <section className="products" id="products">
        <h1 className="heading">Our <span>Products</span></h1>
        <div className="product-slider">
            <div className="wrapper">
            <Slider {...settings}>
                <div className="box">
                    <img src={'./image/Tomato.jpg'} alt=""/>
                    <h3>Tomato</h3>
                    <div className="price">₹ 00.0/- - 00.0/-</div>
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
                    <div className="price">₹ 00.0/- - 00.0/-</div>
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
                    <div className="price">₹ 00.0/- - 00.0/-</div>
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
                    <div className="price">₹ 00.0/- - 00.0/-</div>
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
                    <div className="price">₹ 00.0/- - 00.0/-</div>
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
                    <div className="price">₹ 00.0/- - 00.0/-</div>
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
                    <div className="price">₹ 00.0/- - 00.0/-</div>
                    <div className="stars">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half"></i>
                    </div>
                    <a href="#" className="btn">Add to Cart</a>
                </div>
                </Slider>
            </div>
        </div>
    </section>
    </div>);
}
export default Products;