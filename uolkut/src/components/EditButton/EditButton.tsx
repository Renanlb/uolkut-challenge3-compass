import styles from './EditButton.module.css'

const EditButton: React.FC = () => {
    return (
        <div>
            <button className={styles.button}>Editar meu Perfil</button>
        </div>
    );
};

export default EditButton