import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Home from './Components/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index path='/' element={<Home />} />
          <Route path='/' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}