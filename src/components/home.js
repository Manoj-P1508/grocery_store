import '../style.css';
import React from 'react';


function Home(){
    return(<div>
         <section className="home" id="home">
        <div className="content">
            <h3>Products for You</h3>
            <p>shop the products easy and quick, get it delivered to your doorsteps on time</p>
            <a href="#products" className="btn">Shop Now</a>
        </div>
    </section>
    </div>);
}
export default Home;