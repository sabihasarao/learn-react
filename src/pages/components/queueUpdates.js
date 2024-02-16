import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1); //setnumber(0)
        setNumber(n => n + 1); //setnumber(1)
        setNumber(n => n + 1); //setnumber(2)
      }}>+3</button>
    </>
  )
}
