import styles from './styles.module.scss'

export const Header = () => {

    return (
        <header className={styles.containerHeader}>
            <div>
                <span>IMC</span>
                <p>powered by GabrielDeveloper</p>
            </div>
        </header>
    );
}