import React, { useReducer, useState } from 'react'



const Counter = () => {

	const counterReducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };
      case "Decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };


 const [state, dispatch] = useReducer(counterReducer, { count: 0 });	
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "Increment" })}> + </button>
      <button onClick={() => dispatch({ type: "Decrement" })}> - </button>
    </>
  );
}

export default Counter
