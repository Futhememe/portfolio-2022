import { Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Hello } from '../components/HelloSession'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gustavo Souza || 2022</title>
        <meta name="description" content="My best portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header />
        <Text 
          fontFamily='Libre Baskerville'
          fontSize='24px'
          pt='0.5rem'
          fontWeight='400'
        >
          Gustavo Souza
        </Text>
        <Hello />
      </Container>
    </>
  )
}

export default Home
