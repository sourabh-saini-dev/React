import React, { useState } from "react";
const B = () => {
  const [show, setShow] = useState(true)
   const handleChange =()=>{
    if(show === true){
      setShow(false)
    }else{
      setShow(true)
    }
   }

  return (
    <>
    <h1 onClick={handleChange}>{show ? "hide" : "show" }</h1>
  
    </>
  )
};

export default B;

