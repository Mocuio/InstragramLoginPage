import image_googleplay from "../../assets/icon_googleplay.png";
import image_microsoft from "../../assets/icon_microsoft.png";
import image_instagram from "../../assets/instagram.png";
import image_facebook from "../../assets/icon_facebook.png";
import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function Login() {
  return (
    <div className="login_container">
      <div className="form_container">
        <img className="form_logo" src={image_instagram} />
        <div className="form_config_div_input">
          <div className="form_input">
            <input name="userInput" type="text" placeholder="" required />
            <label>Telefone, nome de usuário ou email</label>
          </div>
          <div className="form_input">
            <input
              name="passwordInput"
              type="password"
              placeholder=""
              required
            />
            <label>Senha</label>
          </div>
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
          <p>Entrar com o Facebook</p>
        </div>
        <a className="form_recover_password" href="#">
          Esqueceu a senha?
        </a>
      </div>
      <div className="form_create_account">
        <p>
          Não tem uma conta?
          <a
            className="form_signup"
            href="https://www.instagram.com/accounts/emailsignup/"
          >
            ﾠCadastre-se
          </a>
        </p>
      </div>
      <div className="form_apps_container">
        <p>Obtenha o aplicativo.</p>
        <div className="form_apps">
          <img className="form_apps_googleplay" src={image_googleplay} />
          <img className="form_apps_microsoft" src={image_microsoft} />
        </div>
      </div>
    </div>
  );
}

export default Login;
