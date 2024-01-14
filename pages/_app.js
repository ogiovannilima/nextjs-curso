import '../styles/globals.css'
import './css/integracao1.css' //importar o css aqui faz com que funcione de forma global

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
