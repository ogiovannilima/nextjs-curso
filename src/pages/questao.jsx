import { useEffect, useState } from "react"

export default function Questao() {
  const [questao, setQuestao] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/questao/1')
      .then(resp => resp.json())
      .then(questao => console.log(setQuestao(questao)))
  }, [])

  function renderizarRespostas() {
    if (questao) {
      return questao.resposta.map((resp, i) => {
        return <li key={i}>{resp}</li>
      })
    }
    return false
  }

  return (
    <div>
      <h2>Questao</h2>
      <span>{questao?.pergunta}</span>
      <ul>
        {renderizarRespostas()}
      </ul>
    </div>
  )
}