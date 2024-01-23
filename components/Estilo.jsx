export default function Estilo(props) {
  //é possivel criar um objeto para utilizar dentro do style
  //porem nao tem autocomplete, porque a IDE nao sabe que vc esta criando
  //um objeto css.

    // const estilo = {
    //   backgroundColor: props.numero >= 0 ? '#2D2' : '#D22',
    //   color: props.color,
    //   textAlign: props.direita ? 'right' : 'left'
    // }

    //condicional utilizando className
    const classeAplicada = props.numero >= 0 ? "azul" : "vermelho"
    
  return (
    <div>
      <h1 style={{
        backgroundColor: props.numero >= 0 ? '#2D2' : '#D22',
        color: props.color,
        textAlign: props.direita ? 'right' : 'left'
      }}>
        Texto
      </h1>

      <h2 className={classeAplicada}>
        Texto #02
      </h2>
    </div>
  )
}