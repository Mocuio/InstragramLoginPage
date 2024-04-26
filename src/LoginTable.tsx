import googlePlay from "./components/getAppPhotos/imageGooglePlay.png";
import microsoft from "./components/getAppPhotos/imageGetInMicrosoft.png";
import Instagram from "./assets/Instagram_logo.png";
import facebookIcon from "./components/facebookIcon/facebookIcon.png";

import "./App.css";

function Login() {
  const stylesGooglePlay = {
    height: "40px",
    width: "134px",
  };

  const stylesMicrosoft = {
    height: "40px",
    width: "110px",
    fontFamily: "Times New Roman, Times, serif",
  };

  const space = {
    padding: "9px 0 7px 8px",
  };

  const recuperarSenha = {
    fontSize: "14px",
    marginTop: "12px",
    textDecoration: "none",
    color: "#385185",
  };
  const singUp = {
    color: "#4bb4f8",
    textDecoration: "none",
  };

  const textGetApp = {
    alignItems: "center",
  };

  return (
    <>
      <div className="LoginTemplate">
        <div className="LoginLayout">
          <img className="instagramImage" src={Instagram} />
          <div className="usernameInput">
            <input
              className="loginInput UsernameBoxInput"
              type="text"
              required
            />
            <p style={space}>Phone number, username, or email</p>
          </div>
          <div className="passwordInput">
            <input
              className="loginInput PasswordBoxInput"
              type="text"
              required
            />
            <p style={space}>Password</p>
          </div>
          <button className="buttonLogin">Log in</button>

          <div className="hrDiv">
            <hr className="hrConfig" />
            <p className="p">OR</p>
            <hr className="hrConfig" />
          </div>
          <div className="logWithFacebookDiv">
            <button className="facebookButtonPng">
              <img width="18px" src={facebookIcon} />
            </button>
            <p>Log in with Facebook</p>
          </div>
          <a style={recuperarSenha} href="#">
            Forgot password?
          </a>
        </div>
        <div className="CreateAccount">
          <p>
            Don't have an account?
            <a
              style={singUp}
              href="https://www.instagram.com/accounts/emailsignup/"
            >
              ﾠSing up
            </a>
          </p>
        </div>
        <div className="getAppsDiv">
          <p> Get the app</p>
          <div className="getApps">
            <img style={stylesGooglePlay} src={googlePlay} />
            <img style={stylesMicrosoft} src={microsoft} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
