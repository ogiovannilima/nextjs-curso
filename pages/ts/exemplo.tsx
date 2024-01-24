import Pessoa from "../../components/Pessoa";

export default function ExemploTS() {
  return (
    <div>
      <Pessoa nome="Giovanni"/>
      <Pessoa nome="Giovanni" idade={30}/>
    </div>
  )
}