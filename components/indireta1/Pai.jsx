import Filho from "./Filho";

export default function Pai(props) {

  function falarComPai(param1, param2, param3) {
    console.log(param1, param2, param3)
    // console.log('alguem falou comigo')
  }

  return (
    <div>
      <Filho funcao={falarComPai} />
    </div>
  )
}