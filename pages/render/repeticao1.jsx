export default function Repeticao1() {
  const listaAprovados = [
    'joao',
    'maria',
    'daniel',
    'laura',
    'ana',
  ]

  function renderizarListaFor() {
    const itens = []

    for (let i = 0; i < listaAprovados.length; i++) {
      itens.push(<li key={i}>{listaAprovados[i]}</li>)
    }
    return itens
  }


  function renderizarListaMap() {
    return listaAprovados.map(((nome, i) => {
      return <li key={i}>{nome}</li>
    }))
  }

  return (
    <>
      <h1>Lista com For</h1>
      <ul>
        {renderizarListaFor()}
      </ul>

      <h1>Lista com Map</h1>
      <ul>
        {renderizarListaMap()}
      </ul>
    </>
  )
}