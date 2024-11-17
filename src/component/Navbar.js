import React from 'react'
import "../styles/navbar.css";
import Logo from "../assets/Logoo.jpg";
import {Link} from "react-router-dom";
import  Instagram  from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import X  from '@mui/icons-material/X';
import WhatsApp  from '@mui/icons-material/WhatsApp';

function Navbar() {
  return (
    <div className='navbar'>
 <div className='leftSide'>
    <img src={Logo} alt='Higal' />
 </div>
 <div className='rightSide'>
   <ul>
      <li><Link to="" style={styles.links}>Home</Link></li>
      <li> <Link to="/menu" style={styles.links}>Menu</Link></li>
      <li><Link to="/offer" style={styles.links}>Offer</Link></li>
      <li><Link to="/gifts" style={styles.links}>Gifts</Link></li>
      <li><Link to="/locations" style={styles.links}>Locations</Link></li>
      <li><Link to="/shop" style={styles.links}>Shop</Link></li>
      <li><Link to="/newsletter" style={styles.links}>Newsletter</Link></li>
      <li><Link to="/contacts" style={styles.links}>Contacts</Link></li>
      <button style={styles.button}>ORDER ONLINE</button>
      <li >   <a href='https://m.facebook.com/higal.ekombe.3/' target='_blank' rel="noopener noreferrer" style={styles.instagram}><Instagram style={styles.socialMedia}/></a></li>
      <li>   <a href='https://x.com/HigalEkomb52804' target='_blank' rel="noopener noreferrer" style={styles.x}><X style={styles.socialMedia}/></a></li>
      <li><a href='https://wa.link/tu37h1' target='_blank' rel="noopener noreferrer" style={styles.whatsapp}><WhatsApp style={styles.socialMedia}/></a></li>
      <li>   <a href='https://m.facebook.com/higal.ekombe.3/' target='_blank' rel="noopener noreferrer"  style={styles.facebook}><Facebook style={styles.socialMedia}/></a></li>
   </ul>
<div> 
</div>
 </div>
    </div>
  )
}
const styles = {
   links: {
      color: "white",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "none"
   },
   button: {
      backgroundColor: "yellow",
      padding: "5px 10px",
      borderRadius: "98px",
      fontWeight: "bold",
   },
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
  socialMedia: {
   fontSize: "20px"
  }
}
export default Navbar
