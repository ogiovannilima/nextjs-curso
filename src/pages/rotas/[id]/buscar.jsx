//colocando o nome de uma pasta dentro de []
//EX: rotas/[id]/buscar.jsx
//sera criado uma rota dinamica, onde eu posso passar alguma informacao para dentro do arquivo
//via url
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Buscar() {
  //dessa forma podemos acessar a informacao que foi enviada via url
  const router = useRouter()
  const id = router.query.id
  console.log(router)

  return (
    <div>
      <h1>Rotas / Id / Buscar!</h1>
      <h2>Rotas / {id} / Buscar!</h2>

      <Link href='/rotas'>
        <button>Voltar</button>
      </Link>
    </div>
  )
}