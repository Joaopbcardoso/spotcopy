import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Artists from './pages/Artists'
import Songs from './pages/Songs'
import Artist from './pages/Artist'
import Song from './pages/Song'
import { Header } from './components/header'



function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
