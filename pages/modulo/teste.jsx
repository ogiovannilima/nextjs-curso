
//se vc exportar por default, ele ignora o nome utilizado no componente
//quando utilizado o export normal, ele obriga voce a usar o nome utilizado da funcao
//import BLABLABLA from '../../components/modulo/funcionais'
//neste caso, a funcao que estamos chamando por padrao, tambem é a funcao que estamos exportando
//por padrao dentro do componente
import Padrao, { Comp1 } from '../../components/modulo/funcionais'
export default function teste() {
  return (
    <div>
      <Comp1 />
      <Padrao />
    </div>
  )
}