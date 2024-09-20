import "./Login.css";
import loginPageImage from "../../assets/login-image.png";
function Login() {
  return (
    <>
      <div className="login-section">
        <div className="left-section">
          <img src={loginPageImage} alt="Login" />
        </div>
        <div className="right-section">
          <div className="section-elements">
            <p className="title">Create an account</p>
            <p className="subtitle">Enter your details below</p>
            <input type="text" className="input-name" placeholder="Name" />
            <input type="text" className="input-email" placeholder="Email" />
            <input
              type="password"
              className="input-password"
              placeholder="Password"
            />
            <button className="create-button">Create Account</button>
            <button className="signup-google-button">
              Sign up with Google
            </button>
            <p className="text-toLogin">
              Already have account? <span>Log in</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
