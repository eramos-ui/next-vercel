import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'



export default function AboutPage() {
  return (
    //la forma de anidar layout es con la función
    // <MainLayout>
    //   <DarkLayout>
    <>
        <h1>About page</h1>
        {/* el title está en los estilos globals.css */}
        <h1 className={'title'}> 
        Ir a <Link href="/">Home</Link> 
         {/* Ir a <a href="/">Home</a> */}
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
      </>
    //     </DarkLayout>

    // </MainLayout>
  )
}
AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
       { page }
      </DarkLayout>
    </MainLayout>
  )
}