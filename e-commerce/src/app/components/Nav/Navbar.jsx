import { links } from './data';
import Link from 'next/link';
import styles from "./Navbar.module.css";
import Button from '../../elements/Button/button';
import Logo from '@/app/elements/Logo/logo';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

export default function Navbar() {
  return ( 
    <nav>
        <ul>
        <div className={styles.container}>
            <Logo/>
            <div className={styles.links}>

            <DarkModeToggle/>
            {links.map(link =>
            <Link key={link.id} href={link.url} className={styles.links}>{link.title}</Link>
            )}
            
           <Button/>
            
            </div>
            </div>
        </ul>
    </nav>
  )
}
