export default function jsxExample4() {
  const titulo = 'estou no javascript';

  function entre(valor, min, max){
    if(valor >= min && valor <= max){
      return 'sim'
    } else {
      return 'nao'
    }
  }

  return (
    <div>
      <h1>Integração JS e JSX</h1>
      <h2>{titulo}</h2>
      <h3>{3 * 3}</h3>
      <h4>{Math.max(239,8740)}</h4>
      <h4>{entre(17, 15, 20)}</h4>
    </div>
  )
}