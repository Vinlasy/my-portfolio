import "../../styles/style.scss";
import styles from "./Header.module.scss";

export const Header = () => {
    const mainNav = [
        "О себе",
        "Навыки",
        "Мои работы",
    ]

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__content}>
                    <nav className={styles.header__nav}>
                        <ul className={styles.header__navList}>
                            {mainNav.map((item) =>
                                <li className={styles.header__navItem}>
                                    <a className={styles.header__navLink} href="#" >
                                        {item}
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