export default function Filho(props) {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <h2>{props.nome}</h2>
      <h1>{props.familia}</h1>
    </div>
  )
}