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
      <li><Link to="" style={styles.links}>HOME</Link></li>
      <li> <Link to="/menu" style={styles.links}>MENU</Link></li>
      <li><Link to="/gifts" style={styles.links}>GIFTS</Link></li>
      <li><Link to="/locations" style={styles.links}>LOCATIONS</Link></li>
      <li><Link to="/shop" style={styles.links}>SHOP</Link></li>
      <li><Link to="/newsletter" style={styles.links}>NEWSLETTER</Link></li>
      <li>  <Link to="/menu">  <button style={styles.button}>ORDERONLINE</button></Link></li>
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
      padding: "5px 30px",
      borderRadius: "98px",
      fontWeight: "bold",
      fontSize: "10px"
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
