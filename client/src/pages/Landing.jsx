import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper className=" hero-bcg">
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <img src={main} alt="job hunt" className="img main-img" />
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>Track all your Job Applications in one place - for free</p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default Landing;
