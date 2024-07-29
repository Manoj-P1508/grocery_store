import '../style.css';
import App from '../App';
import React from 'react';

function Categories(){
    return(<div>
        <section className="categories" id="categories">
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
    </section>
    </div>);
}
export default Categories;