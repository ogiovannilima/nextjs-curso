import { useState } from "react"

export default function Form() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [usuarios, setUsuarios] = useState([])

  async function salvarUsuario(){
    await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify({
        nome,
        idade,
      })
    })

    const response = await fetch('/api/form')
    const usuarios = await response.json()
    setUsuarios(usuarios)

    setNome('')
    setIdade(0)
  }

  function renderizarUsuarios() {
    return usuarios.map((usuario, i) => (
      <li key={i}>Nome: {usuario.nome} - Idade: {usuario.idade}</li>
    ))
  }

  return (
    <div>
      <h1>Integrando com API #02</h1>
      <input type="text" value={nome}
        onChange={e => setNome(e.target.value)}/>
      <input type="number" value={idade}
        onChange={e => setIdade(+e.target.value)}/>

        <button onClick={salvarUsuario}>Enviar</button>

        <ul>
          {renderizarUsuarios()}
        </ul>
    </div>
  )
}