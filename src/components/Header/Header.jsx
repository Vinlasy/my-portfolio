import "../../styles/style.scss";
import styles from "./Header.module.scss";
import githubLogo from "../../assets/svg/github-logo.svg";
import { useState } from "react";

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

    const [isOpen, setIsOpen] = useState(false);


    const handleOpenBurger = () => setIsOpen((prev) => !prev);
    const handleCloseBurger = () => setIsOpen(false);

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__content}>
                    <button 
                        className={`${styles.header__burger} ${isOpen ? styles["header__burger--active"] : ""}`} 
                        aria-label="Меню навигации" 
                        onClick={handleOpenBurger}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <nav className={styles.header__nav} aria-label="Основная">
                        <ul className={`${styles.header__navList} ${isOpen ? styles["header__navList--active"] : ""}`}>
                            {mainNav.map((item) =>
                                <li className={styles.header__navItem}>
                                    <a 
                                        className={styles.header__navLink} 
                                        href={`#${item.anchorId}`} 
                                        onClick={handleCloseBurger}
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </nav>
                    <a className={styles.header__btn} href="https://github.com/Vinlasy/my-portfolio.git" target="blank_">
                        <img className={styles.header__btnIcon} src={githubLogo} alt="Иконка GitHub" width={24} height={24} aria-hidden={true}/>
                        <span className={styles.header__btnText}>Репозиторий</span>
                    </a>
                </div>
            </div>
        </header>
    )
}