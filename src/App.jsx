import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout/Layout'
import Home from './views/Home'
import Profile from './views/Profile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Layout><Home /></Layout>} />
        <Route path='/profile' element={<Layout><Profile /></Layout>} />
      </Routes>
    </Router>
  )
}

export default App
