import React from 'react';
import './Template.css';
import image from '../assets/Bag.png';
import arrow from '../assets/arrow.png';
import Card from '../Components/Card.jsx';
import chair1 from '../assets/chair1.png'
import chair2 from '../assets/chair2.png'
import chair3 from '../assets/chair3.png'
import chair4 from '../assets/chair4.png'
import barrow from "../assets/blackarrow.png"
import rarrow from "../assets/right raaow.png"
import sofa1 from "../assets/sofa1.png"
import sofa2 from "../assets/sofa2.png"
import sofa3 from "../assets/sofa3.png"
import sofa4 from "../assets/sofa4.png"
import customer1 from "../assets/customer1.png"
import customer2 from "../assets/customer2.png"
import customer3 from "../assets/customer3.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import Instagram from "../assets/instagram.png"
import sicon from "../assets/searchicon.png"
import darrow from "../assets/darrow.png"

function Template() {
  return (
    <>
      <div className="container">
        <nav>
          <div className="header">
            <h1>Panto</h1>
            <ul className="navlink">
              <li>Furniture <img src={darrow} alt="" className='darrow' /></li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
            <img src={image} alt="bag" height={30} />
          </div>
        </nav>

        
        <div className="content">
          <h1>
            Make your interior more <br /> minimalistic & modern
          </h1>
          <p>
            Turn your room with panto into a lot more minimalist <br />
            and modern with ease and speed
          </p>
          <div className="inputbox">
            <input type="text" placeholder="Search furniture" />
            <img src={sicon} alt="" />
          </div>
        </div>
      </div>

     
      <div className="container2">
        <div>
          <h1>
            Why <br /> Choosing Us
          </h1>
        </div>

        <div>
          <h3>Luxury facilities</h3>
          <p>
            The advantage of hiring a workspace
            <br />
            with us is that gives you comfortable
            <br />
            service and all-around facilities.
          </p>
          <p className="small">
            More info <img src={arrow} height={20} alt="arrow" />
          </p>
        </div>

        <div>
          <h3>Affordable Price</h3>
          <p>
            You can get a workspace of the highest
            <br />
            quality at an affordable price and still
            <br />
            enjoy the facilities that are only here.
          </p>
          <p className="small">
            More info <img src={arrow} height={20} alt="arrow" />
          </p>
        </div>

        <div>
          <h3>Many Choices</h3>
          <p>
            We provide many unique workspace
            <br />
            choices so that you can choose the
            <br />
            workspace to your liking.
          </p>
          <p className="small">
            More info <img src={arrow} height={20} alt="arrow" />
          </p>
        </div>
      </div>

      
      <div className="container3">
        <h1>Best Selling Product</h1>

        <div className="choose">
          <ul>
            <li className="letter">Chair</li>
            <li>Beds</li>
            <li>Sofa</li>
            <li>Lamp</li>
          </ul>
        </div>
        <div className='container4'>
           <div><img src={barrow} alt="" /></div>
          <div className="card-container">
         
          <Card image={chair1}  name="Sakarias Armchair" rate="$392" />
          <Card image={chair2}  name="Baltsar Chair" rate="$299" />
          <Card image={chair3}  name="Anjay Chair" rate="$519" />
          <Card image={chair4}  name="Nyantuy Chair" rate="$921" />
        </div>
           <div><img src={rarrow} alt="" /></div><br/>
        </div>
        <div className='small6'><p>View All <img src={arrow} alt="" /></p></div>
      </div>
      <div className='container5'>
        <div>
          <img src={sofa1} alt="" />
        </div>
        <div>
          <h5 className='small7'>EXPERIENCES</h5><br/>
          <h1>We Provide You The<br/> Best Experience</h1><br/>
          <p>You don’t have to worry about the result because all of these <br/>interiors are made by people who are professionals in their fields<br/> with an elegant and lucurious style and with premium quality<br/> materials</p><br/>
          <p className='small'>More Info <img src={arrow} alt="" /></p>
        </div>
      </div>
      <div className='container6'>
        <div className='text'>
          <h5 className='small7'>MATERIALS</h5><br/>
          <h1>Very Serious<br/> Materials For Making<br/> Furniture</h1><br/>
          <p>Because panto was very serious about designing furniture for our<br/> environment, using a very expensive and famous capital but at a <br/>relatively low price</p><br/>
          <p className='small'>More Info <img src={arrow} alt="" /></p>
        </div>
        <div className='grid'>
          <img src={sofa2} alt=""/>
          <img src={sofa4} alt="" height={300} /><br/>
          <img src={sofa3} alt="" height={300} className='image' />
        </div>
      </div>
      <div className='container7'>
        <h3>Testimonials</h3>
        <h1>Our Client Reviews</h1>
        <div className='box'>
         <img src={barrow} alt="" height={100}  className='rarrow'/>
          <div><img src={customer1} alt="" /></div>
          <div><img src={customer2} alt="" /></div>
          <div><img src={customer3} alt="" /></div>
          <img src={rarrow} alt="" height={100}  className='larrow'/>
        </div>
      </div>
      <footer>
        <div className='footercont'>
        <div className='container8'>
        <div>
          <h2>Panto</h2><br/>
          <p>The advantage of hiring a workspace with<br/> us is that givees you comfortable service<br/> and all-around facilities.</p>
        </div>
        <div>
          <h3>
            Services
          </h3>
          <h4>
            Email Marketing
          </h4>
          <h4>
            Campaigns
          </h4>
          <h4>
            Branding
          </h4>
        </div>
        <div>
          <h3>
            Furniture
          </h3>
          <h4>
            Beds
          </h4>
          <h4>
            Chair
          </h4>
          <h4>
            All
          </h4>
        </div>
        <div>
          <h3>
            Follow Us
          </h3>
          <h4><img src={facebook} alt="" />Facebook</h4>
          <h4><img src={twitter} alt="" />Twitter</h4>
          <h4><img src={Instagram} alt="" />Instagram</h4>
        </div>
        </div>
        <div className='box2'>
          <div className='letter2'>
            <p>Copy@2021</p>
          </div>
          <div className='footerbox'>
            <p>Terms&Conditions</p><p>Privacy Policy</p>
          </div>
        </div>
        </div>
      </footer>
    </>
  )
};

export default Template;