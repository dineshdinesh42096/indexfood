import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import { Row , Col, Card, card, Container } from 'react-bootstrap';
import App from "./App";
import b1 from './crudimage/b1.jpg';
import b2 from './crudimage/banner8.jpg';
import d from './crudimage/delivary.png';
import p from './crudimage/pay.png';
import q from './crudimage/quality.png';
import e from './crudimage/easy.png';
import Biryani from './crudimage/bir3.png';
import bir1 from './crudimage/bir4.jpg';
import Fried1 from './crudimage/fri4.jpg';
import Tha1 from './crudimage/th2.jpg';
import Chi1 from './crudimage/chi3.jpg';
import but1 from './crudimage/but1.jpg';
import cr1 from './crudimage/cr1.jpg';
import cn1 from './crudimage/cn1.jpg';
import sp1 from './crudimage/sp1.jpg';
import soup1 from './crudimage/soup3.jpg';
import cg1 from './crudimage/cg2.jpg';
import csh1 from './crudimage/csh1.jpg';
import gc1 from './crudimage/gc1.jpg';
import fc2 from './crudimage/fri6.jpg';
import chi2 from './crudimage/chi4.jpg';
import csh2 from './crudimage/csh3.jpg';
import chef1 from './crudimage/chef1.jpg';
import chef2 from './crudimage/chef2.jpg';
import chef3 from './crudimage/chef3.jpg';
import chef4 from './crudimage/chef4.jpg';


function Home() {
    return (
        <div>
           <Carousel controls={false} indicators={false}>
            <Carousel.Item>
                <div className="caroimg">
                    <img 
                        className="d-block w-100" 
                        src={b2} 
                        alt="First slide" 
                        style={{ height: "675px" }} 
                    />
                </div>
                <Carousel.Caption className="caption">
                    <h3>Spice Wing...</h3>
                    <p>At Spice Wings, we serve the juiciest, most flavorful chicken dishes, bursting with bold spices and rich aromas. From crispy fried wings to sizzling grilled delicacies, every bite is a fiery delight for your taste buds! 🔥🍗</p>
                    <button className="btnlog">Login </button>
                </Carousel.Caption>
            </Carousel.Item>
           </Carousel>
            
            <br id="menu"></br><br/><br/>

            {/* --------------------------------------------------------------------------------------------------------- */}

            <center>
                <h4 className="headings">Gourment Menu</h4>
                <hr style={{ width: "10%" }} />
                
                <h5 className="Headings">Please Explore our Exclusive Dishes...</h5>
                <hr style={{ width: "12%" }} />
                <br></br>
            </center>

            {/* --------------------------------------------------------------------------------------------------------- */}
            <Container className="mt-1">
    <Row className="justify-content-center g-5">
        {[
            { src: Biryani, name: 'Biriyani', link: '/product1' },
            { src: Fried1, name: 'Fried Chicken', link: '/product2' },
            { src: Tha1, name: 'Thandhoori Chicken', link: '/menu/tandoori-chicken' },
            { src: Chi1, name: 'Chicken-65', link: '/menu/chicken-65' },
            { src: but1, name: 'Butter Chicken', link: '/menu/butter-chicken' },
            { src: cr1, name: 'Chicken Fried Rice', link: '/menu/chicken-fried-rice' },
            { src: cn1, name: 'Chicken Noodles', link: '/menu/chicken-noodles' },
            { src: sp1, name: 'Chicken Spring Roll', link: '/menu/chicken-spring-roll' },
            { src: soup1, name: 'Chicken Soup', link: '/menu/chicken-soup' },
            { src: cg1, name: 'Chicken Gravy', link: '/menu/chicken-gravy' },
            { src: csh1, name: 'Chicken Shawarma', link: '/menu/chicken-shawarma' },
            { src: gc1, name: 'Grill Chicken', link: '/menu/grill-chicken' }
        ].map((card, index) => (
            <Col xs={4} sm={4} md={2} key={index}>
                <a className='anchor' href={card.link}>
                    <Card className="rou mx-auto">
                        <Card.Img
                            variant="top"
                            src={card.src}
                            height={200} 
                        />
                        <div className="card1-body">
                            <h6 className="card-title text-center routitle">{card.name}</h6>
                        </div>
                    </Card>
                </a>
            </Col>
        ))}
    </Row>
</Container>

        <br/><br/><br/>

        {/* --------------------------------------------------------------------------------------------------------- */}

        <center>
        <div className="bgdesign">
            <div className="bgcontent">
                <h2>Endless Food Choices...</h2>
                <p>Indian cuisine is a rich blend of spices, flavors, and diverse regional specialties, from the creamy butter chicken of Punjab to the tangy dosas of South India.
                   Each dish reflects a unique cultural heritage, making Indian food a delightful culinary experience.</p>
            </div>
            <div className="bgimag">
                <img src={b1} alt="" height={250} width={250}/>
            </div>
        </div>
        </center>
        <br/>

        {/* --------------------------------------------------------------------------------------------------------- */}

        {/* --------------------------------------------------------------------------------------------------------- */}

        <center>
            <h3 className="hometit">Our Samples</h3>
        </center>

        {/* --------------------------------------------------------------------------------------------------------- */}


        <div class="container mt-4">
            <div class="row justify-content-center g-3">
                <div class="col-6 col-md-3">
                    <div class="card cardo">
                        <img src={bir1} class="card-img-top" alt="Card Image" height="250" />
                        <div class="card-body text-center">
                            <h5 class="card-title fw-bold">Chicken Biriyani</h5>
                            <p class="card-text text-muted">A sleek card with an image, title, and text.</p>
                            <a href="#" class="btn btnss">Place order</a>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="card cardo">
                        <img src={fc2} class="card-img-top" alt="Card Image" height="250" />
                        <div class="card-body text-center">
                            <h5 class="card-title fw-bold">Fried Chicken</h5>
                            <p class="card-text text-muted">A sleek card with an image, title, and text.</p>
                            <a href="#" class="btn btnss">Place order</a>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="card cardo">
                        <img src={chi2} class="card-img-top" alt="Card Image" height="250" />
                        <div class="card-body text-center">
                            <h5 class="card-title fw-bold">Chicken lolipop</h5>
                            <p class="card-text text-muted">A sleek card with an image, title, and text.</p>
                            <a href="#" class="btn btnss">Place order</a>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-3">
                    <div class="card cardo">
                        <img src={csh2} class="card-img-top" alt="Card Image" height="250" />
                        <div class="card-body text-center">
                            <h5 class="card-title fw-bold">Chicken Shawarma</h5>
                            <p class="card-text text-muted">A sleek card with an image, title, and text.</p>
                            <a href="#" class="btn btnss">Place order</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/>

        {/* --------------------------------------------------------------------------------------------------- */}

        <center>
            <button className="butt"><a href="#menu">View Menu</a></button>
        </center>
        <br/><br/>

        {/* --------------------------------------------------------------------------------------------------- */}

        <div class="card-group">
        <div class="card cardgal">
            <img src={chef1} class="card-img-top" alt="..." height={250}/>
        </div>
        <div class="card cardgal">
            <img src={chef2} class="card-img-top" alt="..." height={300}/>
        </div>
        <div class="card cardgal">
            <img src={chef3} class="card-img-top" alt="..." height={300}/>
        </div>
        <div class="card cardgal">
            <img src={chef4} class="card-img-top" alt="..." height={300}/>
        </div>
        </div> 
        <br/>

        {/* --------------------------------------------------------------------------------------------------- */}

        <div class="con">
        <br/>
        <center>
            <p class="paragh" style={{color: "Black"}}>Do It Your Way*</p>
            <br/>
            <div class="condet">
            <div class="co">
                <img src={d} alt='' height={50} width={50}/>
                <br/><br/>
                <h6 style={{color: "black"}}>Fast Delivery</h6>
            </div>
            <div class="co">
                <img src={p} alt='' height={50} width={50}/>
                <br/><br/>
                <h6 style={{color: "black"}}>Secure Payment</h6>
            </div>
            <div class="co">
                <img src={e} alt='' height={50} width={50}/>
                <br/><br/>
                <h6 style={{color: "black"}}>Easy Returns</h6>
            </div>
            <div class="co">
                <img src={q} alt='' height={50} width={50}/>
                <br/><br/>
                <h6 style={{color: "black"}}>Certified Quality</h6>
            </div>
            </div>
        </center>
        <br/><br/>
        </div>

        {/* --------------------------------------------------------------------------------------------------- */}

        <footer class="footer">
        <div class="footer-container">
            <div class="footer-column">
                <p>We provide high-quality services to help your business grow.</p>
            </div>
            {/* <div class="footer-column">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">LinkedIn</a></li>
                </ul>
            </div> */}
        </div>
        <div class="footer-bottom">
            &copy; 2025 YourCompany. All Rights Reserved.
        </div>
        </footer>

        {/* --------------------------------------------------------------------------------------------------- */}



        </div>
    );
}

export default Home;
