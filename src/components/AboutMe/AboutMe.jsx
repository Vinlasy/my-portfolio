import "../../styles/style.scss";
import styles from "./AboutMe.module.scss";
import photo from '../../assets/images/photo.jpg';

export const AboutMe = () => {
    return (
        <section className={styles.aboutMe}>
            <div className="container">
                <div className={styles.aboutMe__top}>
                    <div className={styles.aboutMe__inner}>
                        <h1 className={styles.aboutMe__title}>Здравствуйте! Я Ткачев Артем</h1>
                        <h2 className={styles.aboutMe__subTitle}>Frontend-разработчик</h2>
                        <p className={styles.aboutMe__text}>Молодой Frontend-разработчик. С удовольствием изучаю новые навыки</p>
                        <ul className={styles.aboutMe__otherInfo}>
                            <li className={styles.aboutMe__otherInfoText}>Дата рождения:</li>
                            <li className={styles.aboutMe__otherInfoText}>Откуда:</li>
                        </ul>
                    </div>
                    <img className={styles.aboutMe__img} src={photo} alt="Моя фотография" />
                </div>
                <ul className={styles.aboutMe__social}>
                    <li className={styles.aboutMe__socialItem}>
                        <a className={styles.aboutMe__socialLink} href="#">
                            +7 (937) 430-74-66
                        </a>
                    </li>
                    <li className={styles.aboutMe__socialItem}>
                        <a className={styles.aboutMe__socialLink} href="#">
                            artem.tkachev.00@mail.ru
                        </a>
                    </li>
                    <li className={styles.aboutMe__socialItem}>
                        <a className={styles.aboutMe__socialLink} href="#">
                            ВК
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}