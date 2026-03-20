import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
// pages
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About"
import Contato from "./pages/Contato/Contato"
import User from "./pages/User/User"
import Planos from "./pages/Portfólio/Portfolio.jsx"
import Servicos from "./pages/Servicos/Servicos"
import NotFound from "./pages/NotFound/NotFound"

function App() {
  return (
    <Router>
      <div className="app-container">

        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/user" element={<User />} />
            <Route path="/portfolio" element={<Planos />} />
            <Route path="/servicos" element={<Servicos />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  )
}

export default App