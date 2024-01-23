import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <Filho nome="Giovanni" familia={props.familia} />
      <Filho nome="Gabriela" familia={props.familia} />
      {/* feito dessa forma ira sobrescrever o nome lola */}
      {/* <Filho nome="Lola" {...props} /> */}
      <Filho {...props} nome="Lola" />
    </div>
  )
}