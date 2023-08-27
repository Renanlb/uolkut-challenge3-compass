import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase/config'

// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import imgForm from '../../../assets/img_form.svg'
import style from './Forms.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';


const RegisterForm: React.FC = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [occupation, setOccupation] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [relationship, setRelationship] = useState("");
    const [error, setError] = useState<string | null>(null);

    const storeUserDataInFirestore = async (userId, userData) => {

        const userCollection = collection(db, 'users');
        try {
            await addDoc(userCollection, { userId, ...userData })
            console.log('Dados do usuário adicionados ao Firestore');
        } catch (error) {
            console.error('Erro ao adicionar dados do usuário ao Firestore', error)
        }
    }



    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         const user = userCredential.user;
    //     })
    //     .catch((error) => {
    //         const { code, message } = error;
    //         setError(`Erro (${code}): ${message}`)
    //     })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await storeUserDataInFirestore(user.uid, {
                name,
                email,
                password,
                birthdate,
                occupation,
                country,
                city,
                relationship,
                error
            })
            navigate("/");

        } catch (error) {
            setError('Erro ao criar a conta. Tente novamente');
        }

        // const user = {
        //     name,
        //     email,
        //     password,
        //     birthdate,
        //     occupation,
        //     country,
        //     city,
        //     relationship,
        //     error
        // }

        // if (name.length < 2) {
        //     setError("O campo nome precisa ter pelo menos 2 caracteres")
        // }
    }

    const [inputType, setInputType] = useState<'text' | 'date'>('text')

    const handleFocus = () => {
        setInputType('date');
    }

    const navigate = useNavigate();

    return (
        <>
            <form onSubmit={handleSubmit} className={style.form}>

                <img className={style.imglogoRegister} src={imgForm} alt="imgForm" />
                <h2>Cadastre-se no UOLkut</h2>

                <label htmlFor="email"></label>
                <input
                    type="text"
                    placeholder="E-mail"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={style.name_input} />

                <label htmlFor="password"></label>
                <input
                    type="password"
                    placeholder="Senha"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <label htmlFor="name"></label>
                <input
                    type="text"
                    placeholder="Nome"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <div className={style.birthdate_occupation}>
                    <input
                        type={inputType}
                        onFocus={handleFocus}
                        placeholder="Nascimento"
                        id="birthDate"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        className={style.birthdate_input}
                    />

                    <label htmlFor="occupation"></label>
                    <input
                        type="text"
                        placeholder="Profissão"
                        id="occupation"
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                        className={style.occupation_input}
                    />
                </div>

                <div className={style.country_city}>
                    <label htmlFor="country"></label>
                    <input
                        type="text"
                        placeholder="País"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className={style.country_input} />

                    <label htmlFor="city"></label>
                    <input
                        type="text"
                        placeholder="Cidade"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className={style.city_input} />
                </div>

                <label htmlFor="relationship"></label>
                <select id="relationship" value={relationship} onChange={(e) => setRelationship(e.target.value)}>
                    <option defaultValue={""}>Relacionamento</option>
                    <option value="single">Solteiro</option>
                    <option value="affair">Namorando</option>
                    <option value="married">Casado</option>
                    <option value="divorced">Divorciado</option>
                </select>

                <button type="submit">Criar conta</button>
                {error && <p>{error}</p>}
            </form>
        </>
    );
};

export default RegisterForm