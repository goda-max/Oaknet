import React from "react";
import Carousel from "react-multi-carousel";
import '../Pages/Homepage/Homepage.css';
import { Card,Container,Row,Col } from "react-bootstrap";
import * as ri from "react-icons/ri";

function Admin() {
    return (
        <div>
          <header>
            <div className="advert">
               <div className="advert-container"></div>
               <div className="advert-container-2">
                    <h3>Advertisement</h3>
               </div>
            </div>
            <div id="nav">
            <nav className="navigation">
                <div className="logo">
                <img src="/Assets/images/Asset 2.svg" alt="fyx logo" className="img-fluid"/>
                </div>
                <ul>
                    <li><a href="#learnmore"> Learn more <i className="fas fa-caret-right"></i></a></li>
                    <li><a href="/adminlogin ">Login <i className="fas fa-caret-right"></i></a></li>
                    <li><a href="/adminregister">Signup <i className="fas fa-caret-right"></i></a></li>
                    <li><a href="#0794636596"><i className="fas fa-phone-alt"></i> 0794636596</a></li>
                </ul>
            </nav>
            </div>
        </header>
        <div className="landing-image" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.3)) ,url(/Assets/images/landingpage.jpg)"}}>
            <div className="overlay">
                <h2>Ready to Live Smarter?</h2>
                <p>Request for FYX Best-rated Professionals</p>
                <form id="forms">
                    <div className="form-group">
                        <h3>choose service</h3>
                        <select name="service" id="service">
                            <option selected></option>
                            <option value="laptop">Laptop</option>
                            <option value="phone">Phone</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <h3>Description</h3>
                        <select name="description" id="description">
                            <option selected></option>
                            <option value="screen">Screen damage</option>
                            <option value="cable">Cable damage</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <h3>Brand</h3>
                        <select name="brand" id="brand">
                            <option selected></option>
                            <option value="Samsung">Samsung</option>
                            <option value="huawei">Huawei</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <h3>Location</h3>
                        <select name="location" id="location">
                            <option selected></option>
                            <option value="westlands">Westlands</option>
                            <option value="Harambee">Harambee</option>
                        </select>
                    </div>
                    <div className="submit">
                        <button className="btn">Proceed</button>
                    </div>
                    
                </form>
            </div>
        </div>
        <div className="services" id="learnmore">
            <h2>Services we Offer</h2>
            <p>Repair</p>
            <div
      style={{
        paddingBottom: '30px',
        position: 'relative'
      }}
    >
      
    </div>
            <div className="service-icons">
                <div className="service" >
                    <img src="/Assets/images/smartphone.png" alt="#/"/>
                    <h3>Phones</h3>
                </div>
                <div className="service">
                    <img src="/Assets/images/monitor.png" alt="#/"/>
                    <h3>TV's</h3>
                </div>
                <div className="service">
                    <img src="/Assets/images/fridge.png" alt="#/"/>
                    <h3>Fridge</h3>
                </div>
                <div className="service">
                    <img src="/Assets/images/microwave.png" alt="#/"/>
                    <h3>Microwaves</h3>
                </div>
                <div className="service">
                    <img src="/Assets/images/blender.png" alt="#/"/>
                    <h3>Blenders</h3>
                </div>
                
            </div>
        </div>
        <div className="ad-container">
            <div className="ad">
                <div className="image">
                    <img src="/Assets/images/Woman-Cleaning-Refrigerator-At.png" alt="jjjk"/>
                </div>
                <div className="ad-details">
                    <h3>Advert 1</h3>
                </div>
               
            </div>
            <div className="ad">
                <div className="image">
                    <img src="/Assets/images/Copy of barman-front-fridge.jpg" alt=""/>
                </div>
                <div className="ad-details">
                    <h3>Advert 2</h3>
                </div>
                
            </div>
            <div className="ad">
                <div className="image">
                    <img src="/Assets/images/itemslinedonwood.jpg" alt=""/>
                </div>
                <div className="ad-details">
                    <h3>Advert 3</h3>
                </div>
            </div>
        </div>
        <div className="main-container">
            <h2>Why work with us?</h2>
            <div id="container" style={{ backgroundImage:" url(/Assets/images/itemslinedonwood.jpg  )"}}>
                <div className="container-details">
                    <i className="far fa-clock icon"></i>
                    <div className="detail">
                        <h3>Book Conveniently</h3>
                        <p>We provide on-site services from 7.am to 7 p.m.,7days a week.Simply book online or contact us through a phone call and get the service as soon as the next day</p>
                    </div>
                </div>
                <div className="container-details">
                    <i className="fas fa-shield-alt icon"></i>
                    <div className="detail">
                        <h3>For your safety</h3>
                        <p>All our pros undergo rigorous identity checks and personality interviews.We make sure that you do not have to worry about your security</p>
                    </div>
                </div>
                <div className="container-details">
                    <i className="fas fa-people-carry icon"></i>
                    <div className="detail">
                        <h3>Always in touch</h3>
                        <p>Book a service online,keep a track of your service status as well as keep in touch with your pro</p>
                    </div>
                </div>
                <div className="container-details">
                    <i className="fas fa-award icon"></i>
                    <div className="detail">
                        <h3>Best Rated Professionals</h3>
                        <p>Our pros are highly experienced and specialised.This is complimented with our dedication to perfection.We use your reviews and feedback to continuously improve our service</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="wrapper">
            <h2>Brands we Fix</h2>
            
            <div className="brands">
                <div className="brand">
                    
                </div>
                <div className="brand">
                    <img src="/Assets/images/Copy of synix.png" alt="#/"/>
                </div>
                <div className="brand">
                    <img src="/Assets/images/Copy of armco.png" alt="#/"/>
                </div>
                <div className="brand">
                    <img src="/Assets/images/Copy of samsung.png" alt="#/"/>
                </div>
                <div className="brand">
                    <img src="/Assets/images/Copy of sony.png" alt="#/"/>
                </div>
            </div>
        </div>
        <div className="testimonials">
            <h2>Happy Clients' Testmonials</h2>
            <div className="wrapper-container">
                <div className="testimonial">
                    <div>
        
                        
                        <blockquote><ri.RiDoubleQuotesL style={{fontSize:"20px",color:" #fca311"}}/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, ducimus?<ri.RiDoubleQuotesR  style={{fontSize:"20px",color:" #fca311"}}/></blockquote>
                        
                    </div>
                </div>
                <div className="testimonial">
                    <div>
                   
                        <blockquote>  <ri.RiDoubleQuotesL style={{fontSize:"20px",color:" #fca311"}}/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, deserunt?<ri.RiDoubleQuotesR  style={{fontSize:"20px",color:" #fca311"}}/></blockquote>
                        
                    </div>
                </div>
                <div className="testimonial">
                    <div>
                   
                        <blockquote> <ri.RiDoubleQuotesL style={{fontSize:"20px",color:" #fca311"}}/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident. <ri.RiDoubleQuotesR  style={{fontSize:"20px",color:" #fca311"}}/></blockquote>
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="technicians">
            <h2>Technicians spreadout in kenya</h2>
            <div className="map"></div>
        </div>
        <footer>
            <div className="footer">
                <div className="contacts">
                    <h3>Contact us</h3>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i>GA House,2nd floor,Upperhill</li>
                        <li><i className="fas fa-phone-alt"></i>0794636596/0709596105</li>
                        <li><i className="fas fa-envelope"></i> hello@fyx.co.ke</li>
                    </ul>
                    <h3 className="social">Get Social</h3>
                    <ul className="social-links">
                        <li><a href="#facebook"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#instagram"><i className="fab fa-instagram-square"></i></a></li>
                        <li><a href="#twitter"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                </div> 
                <div className="footer-links">
                    <div className="footer-logo">
                        <img src="/Assets/images/imageedit_13_5798258223.png" alt="fyx logo"/>
                    </div>
                    <ul>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#policy">Policy</a></li>
                        <li><a href="#technicians">Technicians</a></li>
                    </ul>
                </div>
                <div className="form-input">
                    <div className="email">
                            <div className="form-group">
                                    <label for="email">Sign up for the news letter</label>
                                    <input type="email" className="form-control" name="email" placeholder="Enter your email address"/>
                            </div>
                            <div className="email-btn">
                                <button className="btn-btn"><i className="fas fa-arrow-right"></i></button>
                            </div>
                    </div>
                    <div className="phone">
                            <div className="form-group">
                                <label for="phone">Ask FYX to call you</label>
                                <input type="tel" className="form-control" name="phone" placeholder="Enter your phone number" />
                            </div>
                            <div className="phone-btn">
                                <button className="btn-btn"><i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>               
                </div>
           </div>
           <hr/>
           <p className="copyright">	&copy; <span>Fyx 2021 All Rights Reserved</span></p>
        </footer>
        </div>
      );
}

export default Admin;