import { useState } from "react";

function useFlip(initialVal = false) {
  // call useState, "reserve piece of state"
  const [flip, setFlip] = useState(initialVal);
  const toggle = () => {
    setFlip((oldValue) => !oldValue);
  };

  // return piece of state AND a function to toggle it
  return [flip, toggle];
}

export default useFlip;
