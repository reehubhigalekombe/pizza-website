import React from 'react';
import "../styles/home.css";
import patrona from "../assets/patrona.jpg";
import patrona1 from "../assets/patrona1.jpg";
import patrona2 from "../assets/patrona3.jpg";
import { Link } from 'react-router-dom';
import CEO from "../assets/newceo.jpg"
function Home() {
  return (
    <div className='home'>
      <div className='hom-pattion first'>
      <video className='backgroundVideo' autoPlay loop muted>
        <source src="/assets/higal.mp4" type="video/mp4"/>
        Your Browser does not support the video tag
      </video>
      <div className='content-overlay'>
        <h1>Welcome to PiZZA Shopp</h1>
        <p>Fresh Ingridients</p>
        <buton>Explore More</buton>
      </div>
      </div>
      <div  className='hom-pattion second'>
      <div className='partion'>
      <h2 styles={{color: "red"}}>NAIROBI CITY STYLE PIZZA PLAZA</h2>
      <h3>Smash the PiZZA Like Royality</h3>
      <p>We wouldn’t be NairobiCity’s Original Neighborhood Pizza Place without outstanding pizza! 
        Pizza Shoppe brings you the absolute best pizzas in town loaded with the finest meats, fresh-cut veggies and 
        homemade pizza sauce – all on our one-of-a-kind cracker crust.
         Pair it with a fresh garden salad, oven baked pasta, or a toasted sandwich to make your meal truly regal.</p>
      </div>
      <div className='partion'>
      <ul>
        <li><Link to="/menu"><img src={patrona} alt='patrona'  /></Link></li>
        <li> <Link to="/menu"><img src={patrona1} alt='patrona1' /></Link></li>
        <li> <Link to="/menu"><img src={patrona2} alt='patrona2' /></Link></li>
      </ul>
  <div>    <Link to="/menu"><button style={styles.button}>VIEW FULL MENU</button></Link></div>
        </div>
        
      </div>
      <div  className='hom-pattion third'>
        
        <h2>Yes Higal</h2>
      </div>
      <div  className='hom-pattion fourth'>
      <div className='fourth-partions'>
      <h2>A Slice of History</h2>
      <img  src={CEO}  alt='ceo'/>
      <h1>Higal Ekombe</h1>
      <h1 style={{color: "blue", lineHeight: "0px"}}>Company President</h1>
      </div>
      <div className='fourth-partioni'>
    <p>The year was 2024. The place, Makadara Jogoo Road, Nairobi. Our founder, Higal Ekombe, noted that
       Nairobians were hungry for irresistible pizzas, pastas and more, served up with authentic 
       hospitality. The answer was Pizza Shoppe — a cozy, neighborhood hangout with a welcoming atmosphere
        and some of the best, most original tastes in town. It automatically became the place where family and friends came
         to enjoy great meals and share memories, time and again. For all that period of time, Pizza Shoppe has been one of the most loved and recognized
          shop by thousands of its customers. Stop by one of our many shops distributed in the Kenyan major Cities and Towns today 
         and discover why our Pizza Shop is the best
      ORIGINAL Neighborhood Pizza Place!</p>
      <div> <Link to="/locations"><button style={styles.button}>FIND OUR LOCATION</button></Link> </div>
     
      </div>
      
      </div>
    </div>
  )
}
const styles ={
  button: {
      backgroundColor: "yellow",
      padding: "15px 48px",
      borderRadius: "98px",
      fontWeight: "bold",
      color: "red",
      
   },
  
}
export default Home
