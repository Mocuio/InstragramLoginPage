import image_googleplay from "../../assets/icon_googleplay.png";
import image_microsoft from "../../assets/icon_microsoft.png";
import image_instagram from "../../assets/instagram.png";
import image_facebook from "../../assets/icon_facebook.png";
import { userSchemaPassword } from "../validations/UserValidation";
import { userSchemaUser } from "../validations/UserValidation";
import { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import "./Login.css";

function Login() {
  const [style, setStyle] = useState("form_login_light");
  const [PasswordCharacterNumbers, setPasswordCharacterNumbers] =
    useState(false);
  const [UsercharacterNumbers, setUserCharacterNumbers] = useState(false);

  const getUserPassword = async (event: any) => {
    event.preventDefault();
    const password: string = event.target.value;
    const isValidPassword = await userSchemaPassword.isValid({
      senha: password,
    });
    setPasswordCharacterNumbers(isValidPassword);
  };

  function changeBottonStyle() {
    if (PasswordCharacterNumbers && UsercharacterNumbers == true) {
      setStyle("form_login_dark");
      (document.getElementById("loggin-button") as any).disabled = false;
    } else {
      setStyle("form_login_light");
      (document.getElementById("loggin-button") as any).disabled = true;
    }
  }

  useEffect(() => {
    changeBottonStyle();
  }, [PasswordCharacterNumbers, UsercharacterNumbers]);

  const getUserInfo = async (event: any) => {
    event.preventDefault();
    const user = event.target.value;
    const isValidUser = await userSchemaUser.isValid({ email: user });
    setUserCharacterNumbers(isValidUser);
  };

  return (
    <div className="login_container">
      <div className="form_container">
        <img className="form_logo" src={image_instagram} />
        <div className="form_config_div_input">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              alert(JSON.stringify(values, null, 1));
            }}
          >
            <Form className="form">
              <div className="form_input" onChange={getUserInfo}>
                <Field name="email" type="text" placeholder="" required />
                <label>Telefone, nome de usuário ou email</label>
              </div>

              <div className="form_input" onChange={getUserPassword}>
                <Field
                  name="password"
                  type="password"
                  placeholder=""
                  required
                />
                <label>Senha</label>
              </div>

              <button type="submit" className={style} id="loggin-button">
                Entrar
              </button>
            </Form>
          </Formik>
        </div>
        <div className="form_hr_container">
          <hr className="form_hr" />
          <p className="form_or">OU</p>
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
