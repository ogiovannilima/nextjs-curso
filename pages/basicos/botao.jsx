function acao1() {
  console.log("acao1")
}

export default function botao() {

  function acao2() {
    console.log('acao2')
  }

  function acao4(e) {
    console.log(e)
  }

  return (
    <div>
      <button onClick={acao1}
        style={{
          height: '100px',
          width: '200px',
          backgroundColor: 'red',
        }}>ACAO 1</button>

      <button onClick={acao2}
        style={{
          height: '100px',
          width: '200px',
          backgroundColor: 'blue',
        }}>ACAO 2</button>

      <button onClick={() => console.log('acao3')}
        style={{
          height: '100px',
          width: '200px',
          backgroundColor: 'green',
        }}>ACAO 3</button>

      <button onClick={acao4}
        style={{
          height: '100px',
          width: '200px',
          backgroundColor: 'yellow',
        }}>ACAO 4</button>

      <button onClick={e => acao4(e.altKey)}
        style={{
          height: '100px',
          width: '200px',
          backgroundColor: 'black',
        }}>ACAO 4</button>

      <div>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
      </div>
    </div>


  )
}