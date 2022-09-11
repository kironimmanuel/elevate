import { nanoid } from "nanoid";
import { useEffect } from "react";
import { FaLightbulb, FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { links } from "../utils/links";

// Pass toggleSidebar as prop, since we only close the sidebar when clicking links on the small sidebar
const NavLinks = ({ toggleSidebar, statCategory }) => {
  const { theme, setTheme } = useAppContext();

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    // It targets the whole DOM, easy light/darkmode setup
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="nav-links">
      {links
        // .filter((_, index) => index < amount)
        .filter((stat) => {
          const { category } = stat;
          return statCategory === category;
        })
        .map((link) => {
          const { text, icon, path } = link;
          return (
            <NavLink
              key={nanoid()}
              to={path}
              // isActive prop provided by react router dom
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={toggleSidebar}>
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      <div className="btn-container">
        {
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light-theme" ? <FaMoon /> : <FaLightbulb />}
            {theme === "light-theme" ? " darkmode" : " lightmode"}
          </button>
        }
      </div>
    </div>
  );
};
export default NavLinks;
