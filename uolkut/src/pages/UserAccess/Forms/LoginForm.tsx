// import { ReactElement } from 'react';
import imgForm from '../../../assets/img_form.svg'
import checkbox from '../../../assets/checkbox.svg'
import { Link, useNavigate } from 'react-router-dom';
import style from './Forms.module.css'
import { useState } from 'react';
//import firebase from '../../../firebase/config';
import { auth } from '../../../firebase/config'; 

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm: React.FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const authenticate = async () => {
        setIsLoading(true);
        
        try {

            await signInWithEmailAndPassword(auth, email, password);
            setError(null)
            navigate("/Profile");
            
        } catch (error) {
            const { code, message } = error;
            setError(`Erro (${code}): ${message}`)
        }

        setIsLoading(false)
    }

    const navigate = useNavigate();
    
    return (
        <>
            <form className={style.form}>
                <img className={style.imglogo} src={imgForm} alt="imgForm" />
                <h2>Acesse o Orkut</h2>

                <label htmlFor="email"></label>
                <input
                    type="email"
                    placeholder="E-mail"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password"></label>
                <input
                    type="password"
                    placeholder="Senha"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <div className={style.check_box}>
                    <img src={checkbox} alt="imgForm" />
                    <span>Lembrar minha senha</span>
                </div>

                {error && <div>{error}</div>}

                <button onClick={authenticate} disabled={isLoading}>Entrar</button>

                <button onClick={() => navigate("/Register")} className={style.button_secondary}>Criar uma conta</button>

                <Link to="/forgot-password" className={style.forgot_password}>Esqueci a minha senha</Link>

            </form>
        </>
    );
};

export default LoginForm