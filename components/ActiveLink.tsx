
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties, FC } from 'react';
const style: CSSProperties = { //28, se pone afuera para que no sea renderizado c/vez, el CSSProperties es para ser estrictos
   color: '#0070f3',
   textDecoration: 'underline'
} 
interface Props{// se desestrucutra las Props en las que interesan
   text: string,
   href: string
}
// export const ActiveLink = ({ text, href }) => { asi era en js
  export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath }=useRouter(); //hook propo de next
  return (
    // se puede como <a href={ href }>{ text } </a>, pero agregamos los Link porque <a></a> acepta style
    <Link href={ href }>
        {/* <a style={ asPath === href ? style : null }>{ text } </a> */}
        {/* cambiado al pasar a typeScript */}
        <a style={ asPath === href ? style : undefined }>{ text } </a>

    </Link>
  );
}
