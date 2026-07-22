import React, { useState } from "react";

const A = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailError] = useState("")
  const [ passworderror, setPasswordError] = useState("")



  const abc=(e)=>{
    e.preventDefault();
      
    if(email ===""){
        setEmailError("email not required")
        return
    }

    if(password === ""){
        setPasswordError("password not required")
   
  }
  setEmailError("")
  setPasswordError("")
  console.log(email,password);
  
}; 

  return (
    <>
      <fieldset>
        <form onSubmit={abc}>
          <label htmlFor="">
            Email:
            <input
              type="text"
              placeholder="Enter your Email"onChange={(e) => setEmail(e.target.value)}
                              
            />
          </label>
          <p style={{color: "red"}}>{emailerror}</p>
          <br />  
          <br />
         

          <label htmlFor="">
            Password:
            <input type="text" placeholder="Enter your Password" onChange={(e)=> setPassword(e.target.value)} />
          </label>

          <p style={{color: "red"}}>{passworderror}</p>
          <br /><br />

          <button>submit</button>
        </form>
      </fieldset>
    </>
  );
};

export default A;
