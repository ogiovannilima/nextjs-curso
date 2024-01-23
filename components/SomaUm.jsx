export default function SomaUm(props) {
  //nao é possível atribuir um numero pois a props é
  //somente de leitura
    // props.numero++

  return (
    <div>
      <h1>{props.numero + 1}</h1>
    </div>
  )
}