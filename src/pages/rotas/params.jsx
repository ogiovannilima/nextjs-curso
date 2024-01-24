import { useRouter } from 'next/router'

//outra forma de enviar parametros, caso nao queira utilizar os [] nos arquivos
//pode ser passado o parametro na url
//EX: http://localhost:3000/rotas/params?nome=giovanni&id=123
//recuperamos da mesma forma utilizando o useRouter - next/router
export default function Params() {
  const router = useRouter();

  const id = router.query.id
  const nome = router.query.nome

  return (
    <div>
      <h1>Rotas params</h1>
      <h3>id: {id}</h3>
      <h3>nome: {nome}</h3>
    </div>
  )
}