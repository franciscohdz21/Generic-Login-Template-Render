import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
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
    </aside>
  )
}
