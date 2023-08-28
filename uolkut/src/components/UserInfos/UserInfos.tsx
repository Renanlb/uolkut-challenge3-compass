import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { getDoc, doc } from 'firebase/firestore';

import styles from './UserInfos.module.css';

const UserInfos: React.FC = () => {
    const [userData, setUserData] = useState({
        relationship: '',
        birthdate: '',
        age: '',
        occupation: '',
        country: '',
        city: ''
    });

    const calculateAge = (birthdate: string | undefined) => {
    if (!birthdate) return '';
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    return (currentYear - birthYear).toString();
    }

    useEffect(() => {

        const fetchUserData = async () => {
            try {
                const userDocRef = doc(db, 'users', `a4TwLDI3Pfhy7oCT4Rcu`);
                const userDocSnapshot = await getDoc(userDocRef);

                if (userDocSnapshot.exists()) {
                    const data = userDocSnapshot.data();
                    setUserData({
                        relationship: data.relationship || '',
                        birthdate: data.birthdate || '',
                        age: calculateAge(data.birthdate),
                        occupation: data.occupation || '',
                        country: data.country || '',
                        city: data.city || ''
                    });
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();

    }, []);

    return (
        <section className={styles.user_infos_container}>
            <label>Relacionamento: <span>{userData.relationship}</span></label>
            <label>Aniversário: <span>{userData.birthdate}</span></label>
            <label>Idade: <span>{userData.age} anos </span></label>
            <label>Quem sou eu: <span>{userData.occupation}</span></label>
            <label>País: <span>{userData.country}</span></label>
            <label>Cidade: <span>{userData.city}</span></label>
        </section>
    );
};

export default UserInfos;