import Titulo from '../../components/Titulo'
export  default function usandoTitulo() {
  return (
    <>
      <Titulo
        titulo="Pagina de Cadastro"
        descricao="Incluir, alterar e excluir usuarios!"
      />

      <Titulo
        titulo="Pagina de Busca"
        descricao="Buscar coisas"
        pequeno
      />
    </>
  )
}