import React from 'react'
import "../styles/footer.css";
import { Link } from 'react-router-dom';
import  Instagram  from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import X  from '@mui/icons-material/X';
import WhatsApp  from '@mui/icons-material/WhatsApp'
import logo from "../assets/Logoo.jpg"
function Footer() {
  return (
    <div className=' footer'>
      <div className='footerTop' style={{backgroundColor: "gold"}}>
        <h1 styles={{textAlign: "center"}}> Get Our Newspaper For Special Offers</h1>
      </div>
      <div className='footerMiddle' >
        
        <div className='footerSplit'>
            <h2>HOME OFFICE</h2>
            <p>123 MW Kenyatta Avenue</p>
            <p>Nairobi City</p>
            <p>Mail line :816.897.563</p>
            <p> Fax: 726.356.999</p>
            <div>
              <h2>KEY CONTACTS:</h2>
              <p>President: Higal Ekombe</p>
              <p>VP/ Sales Marketer: Ian Chisakani</p>
              <p>Social MAnager: Getray Munyendo</p>
              <p>Office MAnager: Elsie Pacha</p>
            </div>
        </div>
        <div className='footerSplit'>
            <h2>VISIT US:</h2>
            <p><Link to="/menu" style={styles.linksty}>Menu</Link></p>
            <p><Link to="/order" style={styles.linksty}>Order Online</Link></p>
            <p><Link to="locations" style={styles.linksty}>Locations</Link></p>
            <p><Link to="gift" style={styles.linksty}>Gift Cards</Link></p>
            <p><Link to="/contact" style={styles.linksty}>Contact</Link></p>
            
        </div>
        <div className='footerSplit'>
            <h2>COMPANY INFO: </h2>
            <p>If you would like onformation about opening your own Pizza Shop locatio, please fill out the following form:</p>
            <p><button style={styles.button}>COMPANY INFO</button></p>
           
        </div>
        <div className='footerSplit'>
          <img src={logo}   alt='logo'/>
            <h2>CONNECT WITH US</h2>
            <a href='https://m.facebook.com/higal.ekombe.3/' target='_blank' rel="noopener noreferrer" style={styles.instagram}><Instagram style={styles.socialMedia}/></a>
       <a href='https://x.com/HigalEkomb52804' target='_blank' rel="noopener noreferrer" style={styles.x}><X style={styles.socialMedia}/></a>
      <a href='https://wa.link/tu37h1' target='_blank' rel="noopener noreferrer" style={styles.whatsapp}><WhatsApp style={styles.socialMedia}/></a>
      <a href='https://m.facebook.com/higal.ekombe.3/' target='_blank' rel="noopener noreferrer" style={styles.facebook}><Facebook style={styles.socialMedia}/></a>
        </div>
      </div>
      <div className='footerTop'>
        <p styles={{color: "white"}}>&copy;2024  PIZZA SHOPP || ALL RIGHTS RESERVED. WEB DESIGN BY G-SPACE TECHNOLOGIES</p>
      </div>
    </div>
  )
}
const styles ={

instagram: {
   color: "white",
   
},
x: {
   color: "white",
},
whatsapp: {
   color: "white",
   
},
facebook: {
   color: "white"
},
linksty: {
  textDecoration:"none",
  color: "white",
  fontSize: "20px",
  fontWeight: "light"
  },
  button: {
    backgroundColor: "black",
    padding: "10px 35px",
    borderRadius: "98px",
    fontWeight: "bold",
    color: "white"
 },
 socialMedia: {
  fontSize: "50px",
  borderRadius: "50%"
  }

 }

export default Footer
