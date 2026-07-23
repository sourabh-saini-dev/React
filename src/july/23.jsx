import React, { useState } from "react";

const B = () => {
  const [show, setShow] = useState(true);
  const changeText = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <button onClick={changeText}>{show ? "hide" : "show"}</button>
    </>
  );
};

export default B;

  //  jab show button par click kare to hide or fir baad me show dikhaye uske liye with if else condition //
