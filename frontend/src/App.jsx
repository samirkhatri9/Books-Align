import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ChatWidget from './components/ChatWidget'
import Home from './pages/Home'
import Services from './pages/Services'
import WhyUs from './pages/WhyUs'
import Contact from './pages/Contact'

export default function App() {
  
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen" style={{ background: '#fff9ec' }}>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </BrowserRouter>
  )
}
