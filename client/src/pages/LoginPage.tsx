import { useState } from 'react'

type Toast = { type: 'success' | 'error'; message: string } | null
type Props = { onLogin: () => void; setToast: (t: Toast) => void }

export default function LoginPage({ onLogin, setToast }: Props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const data = await res.json()
      setLoading(false)
      if (!res.ok) {
        setError(data?.error || 'Login failed')
        setToast({ type: 'error', message: data?.error || 'Login failed' })
        return
      }
      setToast({ type: 'success', message: 'Login Successful' })
      onLogin()
    } catch (err: any) {
      setLoading(false)
      const msg = err?.message || 'Network error'
      setError(msg)
      setToast({ type: 'error', message: msg })
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={submit} className="glass-card w-full max-w-sm p-6 space-y-4">
        <h1 className="page-title">Login</h1>
        {error && <div className="toast-error rounded-md px-3 py-2 text-sm">{error}</div>}
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="input mt-1"
            placeholder="admin | editor | creator | viewer"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="input mt-1"
            placeholder="••••••••"
          />
        </div>
        <button type="submit" className="btn-green w-full" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
