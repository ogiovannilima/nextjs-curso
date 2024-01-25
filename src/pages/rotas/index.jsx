//se for criado arquivos com nome index dentro de alguma pasta
//e a rota da pasta for chamada
//EX: localhost:3000/rotas
//o arquivo index que foi criado sera chamado por padrao
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Rotas() {
  const router = useRouter()

  function navegacaoSimples(url) {
    router.push(url)
  }

  function navegacaoComParams(){
    router.push({
      pathname: '/rotas/params',
      query: {
        id: 13,
        nome: 'Lola',
      }
    })
  }

  return (
    <div>
      <h1>Rotas Index</h1>
      <ul>

        <li>
          <Link href='/rotas/333/Olivia'>
            Buscar nome
          </Link>
        </li>

        <li>
          <Link href='/rotas/333/buscar'>
            Buscar
          </Link>
        </li>

        <li>
          <Link href='/rotas/params?id=13&nome=Lola'>
            Params
          </Link>
        </li>
      </ul>

      <div style={{ display: 'flex', flexDirection: 'column', width: '300px', marginBottom: '10px'}}>
        <button onClick={() => router.push('/rotas/333/buscar')}>Buscar</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '300px', marginBottom: '10px'}}>
        <button onClick={() => navegacaoSimples('/rotas/333/Olivia')}>Buscar Nome</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '300px', marginBottom: '10px'}}>
        <button onClick={navegacaoComParams}>Buscar Params</button>
      </div>
    </div>
  )
}