import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

// Normally, you can create element with the document API such as
const root = document.getElementById("root");

let newElement = document.createElement("div");
newElement.textContent = "Hello World.";
newElement.classList.add("container");
root.appendChild(newElement);

// now we can do the same using react as such
newElement = React.createElement(
  "div",
  {
    className: "container",
  },
  "Hello World"
);
ReactDOM.render(newElement, root);

// React JSX can help you simplify the element creation stuff
newElement = () => {
  return <div className="container">Hello World</div>;
};

ReactDOM.render(<newElement />, root);

// these won't work (your browser don't understand jsx so we can transpile it with babel).

// LAZY INITILIZATION WITH REACT APPLICATION
// when ever you have a default value in a state and it's a long executing operation
// you can pass in a function into the useState hook to lazy load it, for example
function mockLongRunningSychnonousOperation() {
  return JSON.parse('["segun"]');
}
newElement = () => {
  const [name, setName] = useState(mockLongRunningSychnonousOperation);

  return (
    <>
      <div onClick={() => setName("Kayode")}>{name}</div>
    </>
  );
};

// CREATING CUSTOM HOOKS
// an example localstorage custom hook
const useLocalStorageHook = (key) => {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) | null
  );

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
// this custom hook is similar to the useState react hook

// MANIPULATE THE DOM WITH REACT REF
const tiltRef = useRef()

newElement = () => {

  useEffect(() => {
    // this will return the DOM for the div
    console.log(tiltRef.current);
  })

  return <div ref={tiltRef}>
    some value
  </div>
}