import "./globals.css"
import { Montserrat  } from 'next/font/google'
import Footer from './components/Footer/Footer'
import Navbar from './components/Nav/Navbar'
import { ThemeProvider } from "./context/ThemeContext"

const bodyFont = Montserrat({ subsets: ['latin'], weight:['400','900'] } )

export const metadata = {
  title: 'Hexashop - Home',
  description: 'Discover a world of endless shopping at our online store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>

        <ThemeProvider>
          <div className="container">
          <Navbar/>
          <div className="FullHeight"></div>
           {children}
          <Footer/>
          </div>
        </ThemeProvider>

      </body>
    </html>
  )
}
