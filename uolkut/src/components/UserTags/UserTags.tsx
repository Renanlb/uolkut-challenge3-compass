import styles from './UserTags.module.css'


const UserTags: React.FC = () => {
    return (
        <section className={styles.usertags_container}>
            <div>
                <p>Músicas: </p>
                <ul>
                    <li>Trap</li>
                    <li>Rap</li>
                    <li>Indie</li>
                    <span className={styles.usertags_seeall}>Ver todos</span>
                </ul>
            </div>
            <div>
                <p>Filmes:</p>
                <ul>
                    <li>A rede social</li>
                    <li>Meu amigo totoro</li>
                    <span className={styles.usertags_seeall}>Ver todos</span>
                </ul>
            </div>
        </section>
    );
};

export default UserTags