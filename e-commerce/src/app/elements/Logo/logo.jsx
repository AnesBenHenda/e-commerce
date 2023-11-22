import { Lobster } from 'next/font/google'
import Link from 'next/link';
import styles from './logo.modules.css'

const logoFont = Lobster({ subsets: ['latin'], weight:['400'] } )

export default function logo() {
  return (
    <div>
    <Link href="/" className={`${styles.logo} ${logoFont.className}`}> HEXASHOP </Link>
    </div>
  )
}
