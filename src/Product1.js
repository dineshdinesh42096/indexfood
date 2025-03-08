import './product.css';
import { Card } from 'react-bootstrap';
import video from './crudimage/birvid.mp4';
import bir1 from './crudimage/bir5.jpg';
import bir2 from './crudimage/bir6.jpg';
import bir3 from './crudimage/bir7.jpg';
import bir4 from './crudimage/bir8.webp';


const Product1 = () => {
    return (
        <div>

            <br/><br/>
            <div className="banner-container">
                <div className="banner">
                    <video  autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>


            {/* --------------------------------------------------- */}
            <br/>
           <center>
            <h1 className="BTitle">Chicken Biriyani</h1>
           </center>
           <br/>

           {/* ------------------------------------ ----------------*/}

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
                                   <img src={bir4} class="card-img-top" alt="Card Image" height="250" />
                                   <div class="card-body text-center">
                                       <h5 class="card-title fw-bold">Chicken Biriyani</h5>
                                       <p class="card-text text-muted">A sleek card with an image, title, and text.</p>
                                       <a href="#" class="btn btnss">Place order</a>
                                   </div>
                               </div>
                           </div>
           
                           <div class="col-6 col-md-3">
                               <div class="card cardo">
                                   <img src={bir2} class="card-img-top" alt="Card Image" height="250" />
                                   <div class="card-body text-center">
                                       <h5 class="card-title fw-bold">Chicken Biriyani</h5>
                                       <p class="card-text text-muted">A sleek card with an image, title, and text.</p>
                                       <a href="#" class="btn btnss">Place order</a>
                                   </div>
                               </div>
                           </div>
           
                           <div class="col-6 col-md-3">
                               <div class="card cardo">
                                   <img src={bir3} class="card-img-top" alt="Card Image" height="250" />
                                   <div class="card-body text-center">
                                       <h5 class="card-title fw-bold">Chicken Biriyani</h5>
                                       <p class="card-text text-muted">A sleek card with an image, title, and text.</p>
                                       <a href="#" class="btn btnss">Place order</a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>

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
                                   <img src={bir1} class="card-img-top" alt="Card Image" height="250" />
                                   <div class="card-body text-center">
                                       <h5 class="card-title fw-bold">Chicken Biriyani</h5>
                                       <p class="card-text text-muted">A sleek card with an image, title, and text.</p>
                                       <a href="#" class="btn btnss">Place order</a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>


                   <br/><br/>
          
           {/* ---------------------------------------------------- */}

           <center>
           <div className='Bcard'>
             <div className='Bcontent'>
                <h3>How to Make Chicken Biriyani</h3>
                <p>To make chicken biryani, marinate chicken with yogurt, spices, and lemon juice for at least an hour. In a pot, sauté onions, tomatoes, and whole spices in ghee or oil, 
                    then add the marinated chicken and cook until tender. Separately, cook basmati rice with whole spices until 70% done. Layer the chicken and rice, adding saffron-infused milk, fried onions,
                     and coriander leaves. Seal the pot and cook on low heat (dum) for 20-30 minutes. Mix gently and serve hot with raita.</p>
             </div>
             <div className='Bimg'>
                <img src={bir1} alt='biriyani' height={300} width={300} />
             </div>
           </div>
           </center>

           {/* ---------------------------------------------------- */}

        </div>
    );
}

export default Product1;