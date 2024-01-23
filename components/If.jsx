//renderizacao condicional de acordo com a props enviada
//no caso a resposta da condicao >>numero % 2 === 0<<
//resulta em true or false
//assim a renderizacao sera baseada nesta condicao.

export default function If(props) {
  if(props.teste) {
    return props.children
  } else {
    return null
  }
}