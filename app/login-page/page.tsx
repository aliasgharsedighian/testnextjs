import Link from "next/link";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <>
      <h2>Log in</h2>
      <LoginForm />
      <span>OR</span>
      <div className="login-btn-link">
        <div className="social-login-btn">
          <img src="images/social/google-logo.png" alt="" />
          <p>Continue with Google</p>
        </div>
        <div className="social-login-btn">
          <img src="images/social/microsoft-logo.png" alt="" />
          <p>Continue with Microsoft</p>
        </div>
        <div className="social-login-btn">
          <img src="images/social/apple-logo.png" alt="" />
          <p>Continue with Apple</p>
        </div>
      </div>
      <div className="info-login-page">
        <Link href="/sign-up">
          <p>can't log in? Already have an account?</p>
        </Link>
      </div>
    </>
  );
}

export default LoginPage;
