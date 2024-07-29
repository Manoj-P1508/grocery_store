import '../style.css';
import App from '../App';
import React from 'react';

function Blogs(){

    return(<div>
        <div className="blogs" id="blogs">
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
 </div>
    </div>);
}

export default Blogs;