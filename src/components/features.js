import '../style.css';
import React from 'react';

function Features(){
    return(<div>
    <section className="features" id="features">
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
                <h3>Fast Delivery</h3>
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
    </section>
    </div>);
}
export default Features;

