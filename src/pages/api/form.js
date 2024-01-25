const usuarios = []

export default function form(req, res) {
  if (req.method === 'POST') {
    enviarForm(req, res)
  } if (req.method === 'GET') {
    getUsuarios(req, res)
  } else {
    res.status(405).send()
  }

}

function enviarForm(req, res) {
  const usuario = JSON.parse(req.body)
  usuarios.push(usuario)
  res.status(200).send()
}

function getUsuarios(req, res) {
  res.status(200).json(usuarios)
}