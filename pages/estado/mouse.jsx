import { useState } from "react"

export default function Mouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)


  // const arrayX = useState(0)
  // let x = arrayX[0]
  // const setX = arrayX[0]

  // const arrayY = useState(0)
  // let y = arrayY[0]
  // const setY = arrayY[1]

  const estilo = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#222',
    color: '#FFF',
    height: '100vh',
    width: '100vw'
  }

  function mouseMovendo(e) {
    setX(e.clientX)
    setY(e.clientY)
  }


  return (
    <div style={estilo} onMouseMove={mouseMovendo}>
      <h1>Mouse</h1>
      <h2>EIXO X: {x}</h2>
      <h2>EIXO Y: {y}</h2>
    </div>
  )
}