import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Content from './components/Content'

import { Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Teams from './pages/Teams'
import Analytics from './pages/Analytics'
import Messages from './pages/Messages'
import Integrations from './pages/Integrations'

function App() {
  return (
    <div className="container flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
