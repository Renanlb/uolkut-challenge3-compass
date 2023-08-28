import styles from './ContainerProfile.module.css'
import balloon from '../../assets/Bubble.svg'
import InteractionsProfile from '../InteractionsProfile/InteractionsProfile';
import UserInfos from '../../components/UserInfos/Userinfos';
import UserTags from '../UserTags/UserTags';
import FriendsContainer from '../FriendsContainer/FriendsContainer';
import CommunityContainer from '../CommunityContainer/CommunityContainer';



const ContainerProfile: React.FC = () => {
    return (
        <main className={styles.main}>
            <div className={styles.center_content}>
                <h2>Boa tarde, Gabriel Brabosa</h2>
                <div className={styles.balloon_container}>
                    <img src={balloon} alt="" />
                    <p>Programar sem café é igual poeta sem poesia.</p>
                </div>
                <InteractionsProfile/>
                <UserInfos/>
                <UserTags/>
            </div>
            <FriendsContainer/>
            <CommunityContainer/>
        </main>
    );
};


export default ContainerProfile