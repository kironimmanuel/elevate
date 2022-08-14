import { nanoid } from 'nanoid'
import { NavLink } from 'react-router-dom'
import links from '../utils/links'

// Pass toggleSidebar as prop, since we only close the sidebar when clicking links on the small sidebar
const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map(link => {
        const { text, icon, path } = link
        return (
          <NavLink
            key={nanoid()}
            to={path}
            // isActive prop provided by react router dom
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={toggleSidebar}>
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        )
      })}
    </div>
  )
}
export default NavLinks
