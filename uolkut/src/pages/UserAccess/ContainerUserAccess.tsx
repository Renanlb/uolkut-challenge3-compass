//images
import wallpaper from '../../assets/wallpaper.svg'
import bg from '../../assets/bg.svg'

//CSS
import styles from './ContainerUserAccess.module.css'

const ContainerUserAccess = () => {

  return (
    <main className={styles.main}>
        <img src={wallpaper} alt="Orkut" />
        <div className={styles.bg_image}>
          <img src={bg} alt="Background" />
        </div>

        <p>Conecta-se aos seus amigos e familiares <br />
        usando recados e mensagens instantâneas</p>
    </main>
  )
}

export default ContainerUserAccess