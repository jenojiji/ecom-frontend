import "./Register.css";
import loginPageImage from "../../assets/login-image.png";
function Register() {
  return (
    <>
      <div className="login-section">
        <div className="left-section">
          <img src={loginPageImage} alt="Login" />
        </div>
        <div className="right-section">
          <div className="section-elements">
            <p className="title">Log in to Exclusive</p>
            <p className="subtitle">Enter your details below</p>
            <input type="text" className="input-email" placeholder="Email" />
            <input
              type="password"
              className="input-password"
              placeholder="Password"
            />
            <button className="login-button">Log In</button>
            <p className="text-forget-password">
              Forget Password?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
