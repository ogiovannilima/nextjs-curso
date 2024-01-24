export function Comp1() {
  return <h2>Comp1</h2>
}

export const Comp2 = function() {
  return <h2>Comp2</h2>
}

//estou somente desabilitando o es-lint para nao reclamar que a funcao é anonima (sem nome)
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return (
    <div>
      <h2>Comp3</h2>
    </div>
  )
}