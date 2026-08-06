import React, { useState, useEffect } from "react";

const ABC = () => {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  useEffect(() => {
    console.log("hello useffect")
    const timer = setInterval(() => {
      console.log("hello javascript");
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [state]);

  return (
    <>
      <button onClick={() => setState(state + 1)}></button>
      {state}
      {/* <button onClick={() => setState1(state1 + 1)}></button>
      {state1}
      <button onClick={() => setState2(state2 +1)}></button>
      {state2} */}
    </>
  );
};

export default ABC;
