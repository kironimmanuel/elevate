import Wrapper from "../assets/wrappers/BigSidebar";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "show-sidebar sidebar-container"
        }>
        <div className="content">
          <header>
            <Logo />
          </header>
          <div className="nav-links-container">
            <h3>main</h3>
            <NavLinks statCategory="main" />
            <h3>lists</h3>
            <NavLinks statCategory="lists" />
            <h3>user</h3>
            <NavLinks statCategory="user" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
