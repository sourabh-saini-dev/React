import React, { useState } from "react";

const B = () => {
  const [show, setShow] = useState(true);
      
  const changeText= ()=>{
    setShow(!show)
     
  }

  return (
    <>
     <button onClick={changeText}>{show ? "show" : "hide"}</button>
    
      
    </>
  );
};

export default B;

  //  jab show button par click kare to hide or fir baad me show dikhaye uske liye with if else condition //
