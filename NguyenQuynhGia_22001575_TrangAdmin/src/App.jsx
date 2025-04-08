import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Content from './components/Content'
function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Content />
    </div>
  )
}

export default App
