import { ReactElement } from 'react';
import imgForm from '../../../assets/img_form.svg'
import checkbox from '../../../assets/checkbox.svg'
// import Style from "../MainLogin/index.module.css"
import { Link, useNavigate } from 'react-router-dom';
import style from './Forms.module.css'

export const LoginForm: React.FC = (): ReactElement => {

    const navigate = useNavigate();
    return (
        <>
            <form className={style.form}>
                <img className={style.imglogo} src={imgForm} alt="imgForm" />
                <h2>Acesse o Orkut</h2>

                <label htmlFor="email"></label>
                <input type="email" placeholder="E-mail" id="email" />

                <label htmlFor="password"></label>
                <input type="password" placeholder="Senha" id="password" />

                <div className={style.check_box}>
                    <img src={checkbox} alt="imgForm" />
                    <span>Lembrar minha senha</span>
                </div>

                <button>Entrar</button>
                <button onClick={() => navigate("/Register")} className={style.button_secondary}>Criar uma conta</button>

                <Link to="/forgot-password" className={style.forgot_password}>Esqueci a minha senha</Link>

            </form>
        </>
    );
};

export default LoginForm