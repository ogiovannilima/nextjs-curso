import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
//o _app é somente para evitar conflito de nomes
//ele nao é um arquivo privado, e nenhum arquivo criado com "_" sera privado