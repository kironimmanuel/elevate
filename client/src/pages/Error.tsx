import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error: React.FC = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <h3>Houston, we have a problem!</h3>
        <p>We couldn't find the destination you were looking for</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
