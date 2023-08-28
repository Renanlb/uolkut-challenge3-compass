import styles from './SideProfileContainer.module.css'
import userImgNav from '../../assets/userImgNav.svg'
import Borda from '../../assets/Borda.svg'

const SideProfileContainer: React.FC = () => {
    return (
        <section className={styles.sideProfile_container}>
            <img src={userImgNav} className={styles.userImgNav} alt="Profile image" />
            <img src={Borda} className={styles.Borda} alt="Borda" />
            <h1>Gabriel Barbosa</h1>
            <span>Solteiro, Brasil</span>
        </section>
    );
};

export default SideProfileContainer