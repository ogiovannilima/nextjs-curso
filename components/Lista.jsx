// pros.children mostra todos os filhos que foram passados
// dentro do componente, no caso da lista quando chamados
// foi enviado 3 items, utilizando um componente
// EX:
// <Lista>
//   <Item conteudo="item 1" />
//   <Item conteudo="item 2" />
//   <Item conteudo="item 3" />
// </Lista>
// entao a tag: <Item conteudo="item 3" />
// sera o filho

export default function Lista(props) {
  return (
    <div>
      <h1>Lista</h1>
      <ul style={{
        listStyle: 'none',
        padding: 0,
      }}>
        {props.children}
      </ul>
    </div>
  )
}