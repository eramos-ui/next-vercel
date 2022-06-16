
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
 
 export default function PricingPage() {
   return (
     <MainLayout>
         <h1>Priccing page</h1>
         {/* el title está en los estilos globals.css */}
         <h1 className={'title'}> 
           {/* el Link no hace el refresh linea que teníamos -prefetch */}
           Ir a <Link href="/">Home</Link> 
          {/* Ir a <a href="/about">About</a> */}
         </h1>
 
         <p className={'description'}>
           Get started by editing{' '}
           <code className={'code'}>pages/pricing/index.jsx</code>
         </p>
     </MainLayout>
   )
 }
 