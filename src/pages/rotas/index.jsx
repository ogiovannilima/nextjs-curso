//se for criado arquivos com nome index dentro de alguma pasta
//e a rota da pasta for chamada
//EX: localhost:3000/rotas
//o arquivo index que foi criado sera chamado por padrao
import Link from 'next/link'

export default function rotas() {
  return (
    <div>
      <h1>Rotas Index</h1>
      <ul>
        <li>
          <Link href='/rotas/params?id=13&nome=Lola'>
            Params
          </Link>
        </li>

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
      </ul>
    </div>
  )
}