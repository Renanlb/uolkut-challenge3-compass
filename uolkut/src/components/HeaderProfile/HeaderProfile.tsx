import logo from '../../assets/UOLkut.svg';
import userImgNav from '../../assets/userImgNav.svg';
import searchIcon from '../../assets/searchbar-icon.svg'
import dropdownNav from '../../assets/dropdownNav.svg'

import styles from './HeaderProfile.module.css'

const HeaderProfile: React.FC = () => {

  return (
    <>
      <nav className={styles.navbar}>
        <img className={styles.img_logo} src={logo} alt="Logo" />
        <ul>
          <li>Início</li>
          <li className={styles.li_profile}>Perfil</li>
          <li>Comunidade</li>
          <li>Jogos</li>
        </ul>

        <div className={styles.searchbar}>
          <img src={searchIcon} alt="Pesquisar" className="search-icon" />
          {/* <input type="search" placeholder="Pesquisar no Orkut" className="search-bar" /> */}
          <span>Pesquisar no UOLkut</span>
        </div>
        <div className={styles.user_profile_container}>
          <img src={userImgNav} alt="Usuário" className="user-profile-img" />
          <span className="user-name desktop-only">Gabriel Barbosa</span>
          <img src={dropdownNav} alt="Usuário" className="user-profile-img" />
        </div>
      </nav>
    </>
  );
};

export default HeaderProfile;