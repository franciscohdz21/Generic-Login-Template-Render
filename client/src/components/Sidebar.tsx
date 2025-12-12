import { useState } from 'react'
import { NavLink } from 'react-router-dom'

type Props = { onLogout: () => void }

export default function Sidebar({ onLogout }: Props) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="sidebar-toggle" onClick={() => setCollapsed(v => !v)}>
        {collapsed ? '>' : '<'}
      </button>
      <nav className="p-2 space-y-1">
        <NavLink
          to="/welcome"
          className={({ isActive }) => `nav-button ${isActive ? 'active' : ''}`}
        >
          <span className="inline-block w-5 text-center">🏠</span>
          {!collapsed && <span>Welcome</span>}
        </NavLink>
      </nav>
      {!collapsed && (
        <div className="mt-auto p-2 flex justify-center">
          <button
            type="button"
            aria-label="Log out"
            className="btn-grey w-full max-w-[160px]"
            onClick={onLogout}
          >
            Log out
          </button>
        </div>
      )}
    </aside>
  )
}
