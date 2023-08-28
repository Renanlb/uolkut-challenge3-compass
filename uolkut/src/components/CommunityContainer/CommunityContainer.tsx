import styles from './CommunityContainer.module.css'

import Carros from '../../assets/Carros.svg'
import Desenhos from '../../assets/Desenhos.svg'
import Crazy from '../../assets/Crazy.svg'
import Fofos from '../../assets/Fofos.svg'
import Animes from '../../assets/Animes.svg'
import Leitura from '../../assets/Leitura.svg'
import Meuovo from '../../assets/Meuovo.svg'
import Mybooks from '../../assets/Mybooks.svg'
import Cafeeee from '../../assets/Cafeeee.svg'


const CommunityContainer: React.FC = () => {
    return (
        <section className={styles.community_container}>
            <div className={styles.community_container_header}>
                <h1>Comunidade (48)</h1>
                <span className={styles.community_seeall}>Ver todos</span>
            </div>
            <div className={styles.community_container_images}>
                <img src={Carros} alt="Carros" />
                <img src={Desenhos} alt="Desenhos" />
                <img src={Crazy} alt="Crazy" />
                <img src={Fofos} alt="Fofos" />
                <img src={Animes} alt="Animes" />
                <img src={Leitura} alt="Leitura" />
                <img src={Meuovo} alt="Meuovo" />
                <img src={Mybooks} alt="Mybooks" />
                <img src={Cafeeee} alt="Cafeeee" />
            </div>
        </section>
    );
};

export default CommunityContainer