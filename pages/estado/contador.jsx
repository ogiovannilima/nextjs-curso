import { useState } from 'react'

export default function Contador() {

  const [contador, setContador] = useState(0)

  function somar() {
    setContador(contador + 1)
  }

  function subtrair() {
    setContador(contador - 1)
  }


  return (
    <div>
      <h1>Contador</h1>
      <span>O contador está em: {contador}</span>
      <button onClick={somar}>+</button>
      <button onClick={subtrair}>-</button>
    </div>
  )
}