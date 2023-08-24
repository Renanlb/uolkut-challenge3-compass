import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import imgForm from '../../../assets/img_form.svg'
import style from './Forms.module.css'


export const LoginForm: React.FC = (): ReactElement => {

    const [inputType, setInputType] = useState<'text' | 'date'>('text')

    const handleFocus = () => {
        setInputType('date');
    }

    const navigate = useNavigate();
    return (
        <>
            <form className={style.form}>

                <img className={style.imglogoRegister} src={imgForm} alt="imgForm" />
                <h2>Cadastre-se no UOLkut</h2>

                <label htmlFor="email"></label>
                <input type="text" placeholder="E-mail" id="email" className={style.name_input} />

                <label htmlFor="password"></label>
                <input type="password" placeholder="Senha" id="password" />

                <label htmlFor="name"></label>
                <input type="text" placeholder="Nome" id="name" />

                <div className={style.birthdate_occupation}>
                    <input
                        type={inputType}
                        onFocus={handleFocus}
                        placeholder="Nascimento"
                        id="birthDate"
                        className={style.birthdate_input}
                    />

                    <label htmlFor="occupation"></label>
                    <input
                        type="text"
                        placeholder="Profissão"
                        id="occupation"
                        className={style.occupation_input}
                    />
                </div>

                <div className={style.country_city}>
                    <label htmlFor="country"></label>
                    <input type="text" placeholder="País" id="country" className={style.country_input} />

                    <label htmlFor="city"></label>
                    <input type="text" placeholder="Cidade" id="city" className={style.city_input} />
                </div>

                <label htmlFor="relationship"></label>
                <select id="relationship">
                    <option defaultValue={""}>Relacionamento</option>
                    <option value="single">Solteiro</option>
                    <option value="affair">Namorando</option>
                    <option value="married">Casado</option>
                    <option value="divorced">Divorciado</option>
                </select>

                <button onClick={() => navigate("/")}>Criar conta</button>
            </form>
        </>
    );
};

export default LoginForm