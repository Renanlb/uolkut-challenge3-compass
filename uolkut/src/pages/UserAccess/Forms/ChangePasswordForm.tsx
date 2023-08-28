import { ReactElement } from 'react';
// import LogoIcon from "/Orkut Project/Compass Challenger/src/assets/ps_orkut.svg"
// import Style from "../MainLogin/index.module.css"
import { useNavigate } from 'react-router-dom';
import imgForm from '../../../assets/img_form.svg'
import style from './Forms.module.css'


export const LoginForm: React.FC = (): ReactElement => {

    const navigate = useNavigate();
    return (
        <>
            <form className={style.form}>

                <img className={style.imglogo} src={imgForm} alt="imgForm" />
                <h2>Nova senha</h2>

                <label htmlFor="code"></label>
                <input type="text" placeholder="Informe o código" id="code" />

                <input type="password" placeholder="Senha" id="password" />
                <input type="password" placeholder="Confirmar senha" id="confirmPassword" />

                <button onClick={() => navigate("/")}>Salvar</button>

                <a>Lembrou sua senha?</a>
                <button className={style.button_secondary}>Entrar com as credenciais</button>

            </form>
        </>
    );
};

export default LoginForm