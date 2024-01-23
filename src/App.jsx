import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import FormValidation from './FormValidation'
import Payload from './Payload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <FormValidation />
      <Payload/>
    </>
  );
}

export default App
