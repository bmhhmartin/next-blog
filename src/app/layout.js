
import './globals.css'
import Header from './components/header';
import Footer from './components/footer';



export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header></Header>
          <div className="container mx-auto px-4">
            {children}
          </div>
        <Footer></Footer>
      </body>
    </html>
  )
}
