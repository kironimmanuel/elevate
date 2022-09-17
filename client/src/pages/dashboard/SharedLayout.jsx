import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { BigSidebar, Navbar, SmallSidebar } from "../../layouts";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        {/* Display property in css with media queries */}
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
