import React from 'react';
import "../styles/gifts.css";
import { Link } from 'react-router-dom';
import Piiz from "../assets/gift.jpeg";
function Gifts() {
  return (
    <div className='gifts'>
      <div className='gift1'>
      </div>
      <div className='gift2'>
        <h1>Gift Cards</h1>
        <p><a href='https://m.facebook.com/higal.ekombe.3/' target='_blank' rel="noopener noreferrer" >PiZZa Shopie</a> is one
         of the emerging, celebrated, and single-family businesses in Nairobi – wooing customers one 
          phenomenal pizza a
          t a time with a one-of-a-kind cracker crust, fresh, tasty toppings and an atmosphere unlike any other.</p>
          <p>Get a taste of this history for yourself or for someone else with Pizza Shoppe gift cards! It’s your choice,
             get your gift card instantly 
            via email or have a card mailed to that special person. Click the link to order!</p>
            <img src={Piiz} alt='pizza'/>
            <h2>Gift Card</h2>
            <h3>Starting @ Ksh. 100</h3>
              <a href='https://wa.link/tu37h1' target='_blank' rel="noopener noreferrer" >  <button>
              ORDER A GIFT CARD
              </button></a>
          
              </div>

      <div className='gift1'>

      </div>
      
    </div>
  )
}

export default Gifts
