import { useState } from 'react'
import ContadorDisplay from '../../components/ContadorDisplay'

export default function Contador() {

  const [contador, setContador] = useState(0)

  function somar() {
    setContador(contador + 1)
  }

  function subtrair() {
    setContador(contador - 1)
  }


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <h1>Contador</h1>
      <ContadorDisplay contador={contador} />
      <div style={{
        margin: '1rem',
      }}>
        <button style={{ height: '3rem', width: '3rem', marginLeft: '1rem' }} onClick={somar}>+</button>
        <button style={{ height: '3rem', width: '3rem', marginLeft: '1rem' }} onClick={subtrair}>-</button>
      </div>
    </div>
  )
}