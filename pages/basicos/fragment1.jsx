import React from 'react'
 
export default function fragment() {
  return (
    <React.Fragment>
      <>
        <h1>Titulo #1</h1>
        <h2>Subtitulo #1</h2>
      </>  

      <>
        <h1>Titulo #2</h1>
        <h2>Subtitulo #2</h2>
      </>
    </React.Fragment>   
  )
}