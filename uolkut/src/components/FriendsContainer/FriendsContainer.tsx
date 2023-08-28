import styles from './FriendsContainer.module.css'

import Fernando from '../../assets/Fernando.svg'
import Ana from '../../assets/Ana.svg'
import Carlos from '../../assets/Carlos.svg'
import Vitor from '../../assets/Vitor.svg'
import Matheus from '../../assets/Matheus.svg'
import Ramos from '../../assets/Ramos.svg'
import Eiji from '../../assets/Eiji.svg'
import Julia from '../../assets/Julia.svg'
import Carol from '../../assets/Carol.svg'


const FriendsContainer: React.FC = () => {
    return (
        <section className={styles.friends_container}>
            <div className={styles.friends_container_header}>
                <h1>Amigos (248)</h1>
                <span className={styles.friends_seeall}>Ver todos</span>
            </div>
            <div className={styles.friends_container_images}>
                <img src={Fernando} alt="Fernando" />
                <img src={Ana} alt="Ana" />
                <img src={Carlos} alt="Carlos" />
                <img src={Vitor} alt="Vitor" />
                <img src={Matheus} alt="Matheus" />
                <img src={Ramos} alt="Ramos" />
                <img src={Eiji} alt="Eiji" />
                <img src={Julia} alt="Julia" />
                <img src={Carol} alt="Carol" />
            </div>
        </section>
    );
};

export default FriendsContainer