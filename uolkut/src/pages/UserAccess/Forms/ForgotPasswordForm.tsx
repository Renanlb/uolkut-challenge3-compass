import { ReactElement } from 'react';
// import LogoIcon from "/Orkut Project/Compass Challenger/src/assets/ps_orkut.svg"
// import Style from "../MainLogin/index.module.css"
import { useNavigate } from 'react-router-dom';
import style from './Forms.module.css'
import imgForm from '../../../assets/img_form.svg'


export const LoginForm: React.FC = (): ReactElement => {

    const navigate = useNavigate();
    return (
        <>
            <form className={style.form}>

                <img className={style.imglogo} src={imgForm} alt="imgForm" />
                <h2>Recupere sua senha</h2>

                <label htmlFor="email"></label>
                <input type="email" placeholder="E-mail cadastrado" id="email" />

                <button onClick={() => navigate("/change-password")}>Enviar código</button>

                <span className={style.remember_password} >Lembrou sua Senha?</span>
                <button className={style.button_secondary}>Entrar com as credenciais</button>

            </form>
        </>
    );
};

export default LoginForm