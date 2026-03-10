import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import Highlights from './components/Highlights'
import Experience from './components/Experience'

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Header />
            <About />
            <Experience />
            <Services />
            <Work />
            <Highlights />
            <Contact />
            <Footer />
        </>
    )
}
