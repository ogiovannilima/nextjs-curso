//é possivel acessar mais de um parametro
// neste caso estamos recebendo o id do primeiro parametro que foi ordenado no nome da pasta
// e temos o nome do arquivo entre [] que possibilita resgatar o proximo parametro conforme url
//EX: http://localhost:3000/rotas/33/giovanni
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Buscar() {
  //dessa forma podemos acessar a informacao que foi enviada via url
  const router = useRouter()
  const id = router.query.id
  const nome = router.query.nome
  console.log(router)

  return (
    <div>
      <h1>Rotas / Id / Buscar!</h1>
      <h2>Rotas / {id} / {nome}</h2>
      <Link href='/rotas'>
        <button>Voltar</button>
      </Link>
    </div>
  )
}