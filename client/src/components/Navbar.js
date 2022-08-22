import { useEffect, useState } from 'react'
import { FaCaretDown, FaUserCircle } from 'react-icons/fa'
import { FcMenu, FcNext, FcPrevious } from 'react-icons/fc'
import Wrapper from '../assets/wrappers/Navbar'
import { useAppContext } from '../context/appContext'
import Logo from './Logo'

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const { user, toggleSidebar, showSidebar, logoutUser } = useAppContext()

  // Dropdown menu auto close
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogout(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [showLogout])

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="small-screen-btn toggle-btn"
          onClick={toggleSidebar}>
          <FcMenu />
        </button>
        <button
          type="button"
          className="big-screen-btn toggle-btn"
          onClick={toggleSidebar}>
          {showSidebar ? <FcNext /> : <FcPrevious />}
        </button>
        <div>
          {/* <Logo /> */}
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="user-info">
          <h5>Welcome, {user?.name}</h5>
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-logout"
              onClick={logoutUser}>
              logout
            </button>
            {/* <button
              type="button"
              className="btn"
              onClick={() => setShowLogout(!showLogout)}
              // onMouseEnter={() => setShowLogout(true)}
              // onMouseLeave={() => setShowLogout(false)}
            >
              <FaUserCircle />
              {user?.name}
              <FaCaretDown />
            </button>
            <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
              <button
                type="button"
                className="dropdown-btn"
                onClick={logoutUser}>
                logout
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
