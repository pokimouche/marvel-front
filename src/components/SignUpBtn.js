import React from "react";
import { Link } from "react-router-dom";

const SignUpBtn = props => {
  return (
    <Link className="sign-up-btn" to="/account/creation">
      Sign up
    </Link>
  );
};

export default SignUpBtn;
