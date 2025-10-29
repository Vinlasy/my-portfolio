import "../../styles/style.scss";
import styles from "./Header.module.scss";

export const Header = () => {
    const mainNav = [
        {
            text: 'О себе',
            anchorId: 'about'
        },
        {
            text: 'Навыки',
            anchorId: 'skills'
        },
        {
            text: 'Мои работы',
            anchorId: 'portfolio'
        },
    ]

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__content}>
                    <nav className={styles.header__nav} aria-label="Основная">
                        <ul className={styles.header__navList}>
                            {mainNav.map((item) =>
                                <li className={styles.header__navItem}>
                                    <a className={styles.header__navLink} href={`#${item.anchorId}`} >
                                        {item.text}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}