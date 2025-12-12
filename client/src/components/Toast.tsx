import { useEffect } from 'react'

type Props = {
  type: 'success' | 'error' | 'warning'
  message: string
  onHide?: () => void
  duration?: number
}

export default function Toast({ type, message, onHide, duration = 3000 }: Props) {
  useEffect(() => {
    const t = setTimeout(() => onHide && onHide(), duration)
    return () => clearTimeout(t)
  }, [onHide, duration])

  const cls =
    type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : 'toast-warning'

  return (
    <div className={`fixed top-4 right-4 ${cls} rounded-md shadow px-4 py-2 text-sm`}>{message}</div>
  )
}
