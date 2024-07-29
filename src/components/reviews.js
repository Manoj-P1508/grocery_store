import React from 'react';
import Slider from 'react-slick';
import '../style.css';

function Reviews() {
    const settings = {
      dots: true,
      reverseDirection: true,
      loop:true,
      infinite: true,
      speed: 200,
      spaceBetween:10,
      slidesToShow: 4, 
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      effect:'slide',
      disableOnInteraction:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">Customer's <span>Reviews</span></h1>
      <div className="review-slider">
        <Slider {...settings}>
          <div className="box">
            <img src="./image/profile.jpg" alt="Profile" />
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

          <div className="box">
            <img src="./image/profile.jpg" alt="Profile" />
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

          <div className="box">
            <img src="./image/profile.jpg" alt="Profile" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius exercitationem reprehenderit pariatur saepe, vitae nostrum laborum! Quaerat aspernatur labore ea consectetur assumenda in alias rerum, vero corporis saepe? Quae?</p>
            <h3>Manu</h3>
            <div className="stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
          </div>

          <div className="box">
            <img src="./image/profile.jpg" alt="Profile" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius exercitationem reprehenderit pariatur saepe, vitae nostrum laborum! Quaerat aspernatur labore ea consectetur assumenda in alias rerum, vero corporis saepe? Quae?</p>
            <h3>Tester</h3>
            <div className="stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Reviews;
