import React, {useState} from 'react';
import "../styles/shop.css";
import SignIn from "../Sign/SignIn"
function Shop() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const toggleSignIn = () => {
    setIsSignInOpen(!isSignInOpen)
  }
  return (
    <div className='shop'>
      <h1>Shop Pizza at Our  Online</h1>
      <h2>Check Out Soon!!!</h2>
      <p>Our omline PiZZA shopping is about to come soon. For time being buy our
         very delicious PiZZA at the shops distributed accross the Country</p>
         <h1>E-Shopie</h1>
      <h2>Always Stay On The Top Latetest PiZZA Talk in Tow</h2>
      <p>Kindly enter your information below for updates, promotion and special offers</p>
     <button onClick = {toggleSignIn} style={styles.signInButton} >
      {isSignInOpen? "Close Sign In" : SignIn}
      {isSignInOpen && <SignIn/>}
     </button>
    </div>
  )
}
const styles ={
  signInButton: {
    cursor: 'pointer',
    borderRadius: "5px",
    padding: "20px 30px",
    border: "none",
    color: 'black',
    backgroundColor: "white"

  }
}
export default Shop
