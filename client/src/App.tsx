import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import WelcomePage from './pages/WelcomePage'
import Sidebar from './components/Sidebar'
import Toast from './components/Toast'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [toast, setToast] = useState<{ type: 'success' | 'error' | 'warning'; message: string } | null>(null)

  return (
    <div className="min-h-screen app-bg text-gray-100">
      {toast && (
        <Toast type={toast.type} message={toast.message} onHide={() => setToast(null)} />
      )}
      {!isAuthenticated ? (
        <LoginPage onLogin={() => setIsAuthenticated(true)} setToast={setToast as any} />
      ) : (
        <div className="flex">
          <Sidebar onLogout={() => { setIsAuthenticated(false); setToast(null) }} />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="*" element={<Navigate to="/welcome" replace />} />
            </Routes>
          </main>
        </div>
      )}
    </div>
  )
}

export default App
