import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function ContactPage() {//al llamarlo index dentro de una carpeta, busca el index
  return (
    <MainLayout>
        <h1>Contact page</h1>
        {/* el title está en los estilos globals.css */}
        <h1 className={'title'}> 
        Ir a <Link href="/">Home</Link> 
         {/* Ir a <a href="/">Home</a> */}
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact.jsx</code>
        </p>

        </MainLayout>
  )
}