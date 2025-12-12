import { useState } from 'react'

type Props = { onLogin: () => void }

export default function LoginPage({ onLogin }: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    // TODO: integrate with server auth later
    setTimeout(() => {
      setLoading(false)
      if (email && password) onLogin()
      else setError('Please enter credentials')
    }, 500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-blue/10 to-brand-grey/10">
      <form onSubmit={submit} className="bg-white w-full max-w-sm rounded-lg shadow p-6 space-y-4">
        <h1 className="page-title">Login</h1>
        {error && <div className="toast-error rounded-md px-3 py-2 text-sm">{error}</div>}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="input mt-1"
            placeholder="you@example.com"
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
