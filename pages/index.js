import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Body from '../components/Body'

// import ToggleMenu from '../components/Functions/handlers'

// ToggleMenu()

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flávia Faggiani - Médica Psiquiatra</title>
        <meta name="author" content="Aloísio Vasconcelos" />
        <meta name="description" content="Médica Psiquiátrica em Brasília-DF - Dra. Flávia Faggiani" />
        <meta name="keywords" content="psiquiatria, medico psiquiatra, medica psiquiatra, brasilia, DF" />
        <meta name="robots" content="index,follow" />
        <meta property="og:image" content="/logoFlaviaFaggianicortado.ico"/>
        <meta property="og:image:type" content="/logoFlaviaFaggianicortado/ico"/>
        <meta property="og:image:width" content="800"/>
        <meta property="og:image:height" content="600"/>
        <link rel="icon" href="/logoFlaviaFaggianicortado.ico"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"></link>

      </Head>

      <main>
        <Header />
        <Body />
      </main>

      <footer className={styles.footer}>

        <p align="center">
          Powered by{' @@V'}
        </p>
        <p align="center">
          Dra. Flávia Coelho Faggiani. Todos os direitos reservados.
        </p>


      </footer>
    </div>
  )
}
