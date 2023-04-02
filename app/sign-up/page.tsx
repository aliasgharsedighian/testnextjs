import React from "react";
import SignUpForm from "./SignUpForm";
import FaceBookButton from "./FaceBookButton";

function SignUpPage() {
  return (
    <div className="sign-up-container">
      <div className="sign-up-info">
        <h2>Join the community</h2>
        <p>
          Take your art to the next level. get it seen by millions of people
        </p>
        <FaceBookButton />
        <span>Or</span>
      </div>
      <SignUpForm />
      <div className="sign-up-warn">
        <span>
          By joining,you agree to our Terms Of Service and Privacy Policy.
        </span>
      </div>
    </div>
  );
}

export default SignUpPage;
