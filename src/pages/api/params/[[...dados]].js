//na construcao desse arquivo
//colocamos o nome dele como [[...dados]]
//ira funcionar da seguinte maneira:
//a palavra "dados" sera um objeto dentro do array e sera um array
//EX:
// {
//   "params": {
//     "dados": [
//       "1"
//     ]
//   }
// }
//quando utilizamos apenas [dados] no nome do array
//é obrigatorio passar o parametro para que a rota funciona
//quando colocamos [[dados]] o envio dos dados sera opcional e a rota funcionara
//quando colocamos [...dados] "os tres pontos antes", sera possivel enviar mais de 1 parametro

//EX:
// {
//   "params": {
//     "dados": [
//       "1",
//       "2",
//     ]
//   }
// }
export default function Params(req, res) {
  res.status(200).json({
    params: req.query
  })
}