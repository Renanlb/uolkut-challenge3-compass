import star from '../../assets/Star.svg'
import smiley from '../../assets/Smiley.svg'
import thumbs_up from '../../assets/ThumbsUp.svg'
import heart from '../../assets/Heart.svg'

import styles from './InteractionsProfile.module.css'


const InteractionsProfile: React.FC = () => {
    return (
        <section className={styles.interactions_container}>
            <div className={styles.fan_container}>
                <span>Fãs</span>
                <div className={styles.fan_sub_container}>
                    <img src={star} alt="star" />
                    <span>85</span>
                </div>
            </div>
            <div className={styles.confiability_container}>
                <span>Confiável</span>
                <div>
                    <img src={smiley} alt="smiley" />
                    <img src={smiley} alt="smiley" />
                </div>
            </div>
            <div className={styles.cool_container}>
                <span>Legal</span>
                <div>
                    <img src={thumbs_up} alt="thumbs_up" />
                    <img src={thumbs_up} alt="thumbs_up" />
                    <img src={thumbs_up} alt="thumbs_up" />
                </div>
            </div>
            <div className={styles.sexy_container}>
                <span>Sexy</span>
                <div>
                    <img src={heart} alt="heart" />
                    <img src={heart} alt="heart" />
                </div>
            </div>
        </section>
    );
};

export default InteractionsProfile