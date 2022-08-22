import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import { FaLightbulb, FaMoon } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import { externalLinks, links } from '../utils/links'

// Pass toggleSidebar as prop, since we only close the sidebar when clicking links on the small sidebar
const NavLinks = ({ toggleSidebar }) => {
  const { theme, setTheme } = useAppContext()

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    // It targets the whole DOM, easy light/darkmode setup
    document.documentElement.className = theme
    // console.log(document.documentElement)
  }, [theme])

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
      {/* <hr className="separator-line" /> */}
      {externalLinks.map(link => {
        const { id, text, icon, url } = link
        return (
          <a
            as="a"
            href={url}
            target="_blank"
            key={id}
            className="nav-link"
            onClick={toggleSidebar}
            rel="noreferrer">
            <span className="icon">{icon}</span>
            {text}
          </a>
        )
      })}
      <div className="btn-container">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === 'light-theme' ? <FaMoon /> : <FaLightbulb />}
          {theme === 'light-theme' ? ' darkmode' : ' lightmode'}
        </button>
      </div>
    </div>
  )
}
export default NavLinks
