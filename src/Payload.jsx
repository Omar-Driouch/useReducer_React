import React, { useReducer } from 'react'

const handlevalidation = (state, action) => {
	switch (action.type) {
  case "SetAge":
	return {...state,age:action.payload };
  case "SetName":
	return {...state,name:action.payload  };
	case "SetAddress": 
	return { ...state, address: action.payload };
}
}
const Payload = () => {

	const [state, dispatch] = useReducer(handlevalidation, {age :"", name: "", address: ""});
	const handleAge =(e)=>{

		dispatch({ type: "SetAge", payload: e.target.value });

	}

	const handleName = (e) => {
    dispatch({ type: "SetName", payload: e.target.value });
  };

  	const handleAddress = (e) => {
      dispatch({ type: "SetAddress", payload: e.target.value });
    };
  return (
    <>
      <p> Age : {state.age}</p>
      <input value={state.age} onChange={handleAge}></input>
      <p>---</p>
      <p>name : {state.name}</p>
      <input value={state.name} onChange={handleName}></input>
      <p>---</p>
      <p>name : {state.address}</p>
      <input value={state.address} onChange={handleAddress}></input>
    </>
  );
}

export default Payload
