import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom'
import Cookies from 'js-cookie'
import { Home, Leads, Login, Profile, Registration } from './pages'

function App() {
  const ProtectedRoute = () => {
    const checkAuthCookie = Cookies.get('Authorization')
    if (!checkAuthCookie) {
      alert('Autenticação necessária')
      return <Navigate to="/" replace /> //Se estiver errado vai para rota de login
    }

    return <Outlet /> //Se a autenticação foi concluida pode renderizar normalmente
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route element={<ProtectedRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/perfil" element={<Profile />} />
          </Route>
          <Route path="*" element={<span>404 - Not found</span>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
