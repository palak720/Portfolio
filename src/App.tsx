import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Navbar, { NAV_LINKS } from './components/Navbar'
import Stats from './components/Stats'
import Work from './components/Work'
import { useActiveSection } from './hooks/useActiveSection'

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export default function App() {
  const active = useActiveSection(SECTION_IDS)
  return (
    <>
      <Navbar active={active} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
