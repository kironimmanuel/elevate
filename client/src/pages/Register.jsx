import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow, Logo } from "../components";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  // The useNavigate hook returns a function that lets you navigate programmatically, for example after a form is submitted. If using replace: true, the navigation will replace the current entry in the history stack instead of adding a new one
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user, setupUser, isLoading, alertWarn } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    // Dynamic object keys - we dynamically set the property keys and assigned them the input values
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      alertWarn("Please fill out all fields!", {
        theme: "colored",
      });
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Sign up"}</h3>
        {!values.isMember && (
          <FormRow
            labelText="name"
            name="name"
            type="text"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          labelText="email address"
          name="email"
          type="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          labelText="password"
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button
          type="submit"
          className="btn btn-block"
          disabled={isLoading}
          data-cy="login/register">
          {values.isMember ? "Login" : "Sign up"}
        </button>
        <p>
          {values.isMember ? "Not a member?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {!values.isMember ? "Login" : "Sign up for free!"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
