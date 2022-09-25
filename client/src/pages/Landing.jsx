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
          <div className="text-container">
            <h1>
              El<span>ev</span>ate
            </h1>
            <p>
              Track and manage all your Job applications in one place - for
              free! <br />
              Elevate provides an easy way to keep track of job status, applied
              companies, and application statistics.
            </p>
            <Link
              to="/register"
              className="btn btn-hero"
              data-cy="login/register">
              Login/Register
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Landing;
