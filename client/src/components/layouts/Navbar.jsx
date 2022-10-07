import moment from "moment";
import { useState } from "react";
import { FaChevronDown, FaRegBell, FaSearch } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { MdChatBubbleOutline } from "react-icons/md";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
import Wrapper from "../assets/wrappers/Navbar";
import { useAppContext } from "../context/appContext";

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { user, toggleSidebar, showSidebar } = useAppContext();

  const now = new Date().getTime();
  const time = moment(now).format("MMMM Do YYYY, h:mm a");

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
          {showSidebar ? <RiMenuUnfoldLine /> : <RiMenuFoldLine />}
        </button>
        {/* <input type="text" /> */}
        {/* <FaSearch /> */}

        <div>
          <h3 className="date">{time}</h3>
        </div>
        <div className="user-info">
          <MdChatBubbleOutline className="chat" />
          <div
            className="notification-bell"
            onMouseEnter={() => setIsDropDownOpen(true)}
            onMouseLeave={() => setIsDropDownOpen(false)}>
            <FaRegBell />
          </div>
          <aside className={isDropDownOpen ? "dropdown show" : "dropdown"}>
            No Notifications
          </aside>
          <h5>{user?.name}</h5>
          <div className="profile">{user?.name.charAt(0)}</div>
          <FaChevronDown />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
