import React, { useReducer } from "react";

const FormValidation = () => {
  const ValidationReducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return {counter : state.counter + 1};
      case "Decrement":
        return { counter: state.counter - 1 };
      default:
        return  state  ;
    }
  };
  const [state, dispatch] = useReducer(ValidationReducer, { counter: 0 });
  return (
    <>
      <>
        <p> x {state.counter}  </p>
        <button onClick={() => dispatch({ type: "Increment" })}> + </button>
        <button onClick={() => dispatch({ type: "Decrement" })}> - </button>
      </>
    </>
  );
};

export default FormValidation;
