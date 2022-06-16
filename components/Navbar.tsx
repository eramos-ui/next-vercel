//import React from 'react'
//import Link from 'next/link';

import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';//debe tener el module

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    // ['menu-container'] es una propiedad computada porque no se acepta el guión
    <nav className={ styles['menu-container']}>
      {/* El link no soporta style, habría que ponerle dentro un <a></a> */}
      {/* <Link href = "/" > Home</Link>
      <Link href= "/about" >About</Link>
      <Link href = "/contact" >Contact</Link> */}
      {  
         menuItems.map( ( menuItem ) => 
          (<ActiveLink key={ menuItem.href } text={ menuItem.text } href= { menuItem.href } />)
        ) 
      }
      {/* Aquí no ser requiere el envío de children y el text y el href son properties  */}
      {/* <ActiveLink text="Home" href = "/" />
      <ActiveLink text="About"href= "/about" />
      <ActiveLink text="Contact"href = "/contact" /> */}
    </nav>
  )
}