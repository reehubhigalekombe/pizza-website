import React, { useState } from "react"
function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "password") {
      setMessage("Sign In Successsful")
    }
    else {
      setMessage("invalid Username or Password")
    }

  }
  setPassword("")
  setPassword("")
  return (
    <div id="signin-bar" style={styles.signInBar}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username' style={styles.label}>Username:
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'
        required style={styles.input}/>
</label>
<label htmlFor='password' style={styles.label}>Password
  <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' 
  required style={styles.input}/>
</label>
<button type='submit' style={styles.button}> Sign In</button>
      </form>
      <p>{message}</p>
      
    </div>
  )
}
const styles = {
  input: {
    width: "93%",
    padding: "5px",
    margin: "5px 0px"
  },
  label: {
    textalign: "justify",
    fontWeight: "bold",
  },
  signInBar: {
    width: "250px",
    padding: "5px",
    margin: "40px auto",
    border: "1px solid-black",
    textalign: "justify"
  } ,
  button: {
    width: "93%",
    padding: "5px",
    alignitems: "centrer",
    justifyContent: "center",
  }

}
export default SignIn
