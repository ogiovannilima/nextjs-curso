export default function Filho(props) {
  // "Passei no enem!!"
  // console.log(props.funcao)
  return (
    <div>
      <h1>FILHO</h1>
      <button 
        onClick={() => props.funcao("Passei no vestibular!!", "UHUUUU", 10)}
      >
        FALAR COM O PAI
      </button>
    </div>
  )
}