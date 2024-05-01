import image_googleplay from "../../assets/icon_googleplay.png";
import image_microsoft from "../../assets/icon_microsoft.png";
import image_instagram from "../../assets/instagram.png";
import image_facebook from "../../assets/icon_facebook.png";
import './Login.css';

function Login() {
  return (
    <div className="login_container">
      <div className="form_container">
        <img className="form_logo" src={image_instagram} />
        <div className="form_username">
          <input className="form_username_input" type="text" required />
          <p className="form_space">Phone number, username, or email</p>
        </div>
        <div className="form_password">
          <input className="form_password_input" type="text" required />
          <p className="form_space">Password</p>
        </div>
        <button className="form_login">Log in</button>
        <div className="form_hr_container">
          <hr className="form_hr" />
          <p className="form_or">OR</p>
          <hr className="form_hr" />
        </div>
        <div className="form_facebook">
          <button className="form_facebook_button">
            <img width="18px" src={image_facebook} />
          </button>
          <p>Log in with Facebook</p>
        </div>
        <a className="form_recover_password" href="#">
          Forgot password?
        </a>
      </div>
      <div className="form_create_account">
        <p>
          Don't have an account?
          <a
            className="form_signup"
            href="https://www.instagram.com/accounts/emailsignup/"
          >
            ﾠSing up
          </a>
        </p>
      </div>
      <div className="form_apps_container">
        <p> Get the app</p>
        <div className="form_apps">
          <img className="form_apps_googleplay" src={image_googleplay} />
          <img className="form_apps_microsoft" src={image_microsoft} />
        </div>
      </div>
    </div>
  );
}

export default Login;