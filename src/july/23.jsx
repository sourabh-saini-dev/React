import React, { useState } from "react";
const B = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ emailerror, setEmailError] = useState("")
  const [passworderror , setPasswordError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    

    if(email === ""){
      setEmailError("email is required")
      return
    }

    if(password === ""){
      setPasswordError("password is required")
      return 
    }
      
   
   console.log(email,password)
      setEmail("")
     setPassword("")
   
  };

  return (
    <>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <h1>Login page</h1>
          <label htmlFor="">
            Email:
            <input
              type="text"
              name="Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <p style={{color: "red"}}>{emailerror}</p>
          <br />
          <br />

          <label htmlFor="">
            Password:
            <input
              type="text"
              name="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p style={{color: "red"}}>{passworderror}</p>
          <br />
          <br />

          <button type="Submit">Submit</button>
        </form>
      </fieldset>
    </>
  );
};

export default B;

//  jab show button par click kare to hide or fir baad me show dikhaye uske liye with ternary operater //
