// import Head from 'next/head'
import Link from 'next/link'

import { MainLayout } from '../components/layouts/MainLayout'
//import { Navbar } from '../components/Navbar'
//import styles from '../styles/globals.css'

export default function HomePage() {
  return (
    <MainLayout>
        <h1>Home page</h1>
        {/* el title está en los estilos globals.css */}
        <h1 className={'title'}> 
          {/* el Link no hace el refresh linea que teníamos -prefetch */}
          Ir a <Link href="/about">About</Link> 
         {/* Ir a <a href="/about">About</a> */}
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.jsx</code>
        </p>
    </MainLayout>
  )
}
