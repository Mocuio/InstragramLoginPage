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

  return (
    <>
      <div className="LoginTemplate">
        <div className="LoginLayout">
          <img className="instagramImage" src={Instagram} />

          <div className="input-field">
            <input type="text" placeholder="" />
            <label>Telefone, nome de usuário ou email</label>
          </div>

          <div className="input-field">
            <input type="password" placeholder="" />
            <label>Senha</label>
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
