export default function jsxExample2() {
  const nomes = [
    <li key="1">Giovanni</li>,
    <li key="2">Manu</li>,
    <li key="3">Olivia</li>,
  ]
  const conteudo = (
    <div>
      <h1>JSX #02</h1>
      <ul>
        {
          nomes.map((nome) => {
            return nome
          })
        }
      </ul>
    </div>
  );
  return conteudo
}