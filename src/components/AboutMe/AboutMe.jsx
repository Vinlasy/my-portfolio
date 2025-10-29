import "../../styles/style.scss";
import styles from "./AboutMe.module.scss";
import photo from "../../assets/images/photo.jpg";
import emailIcon from "../../assets/svg/email-icon.svg";
import phoneIcon from "../../assets/svg/phone-icon.svg";
import headhunterLogo from "../../assets/svg/headhunter-logo.svg";

export const AboutMe = () => {
    return (
        <section className={styles.aboutMe} id="about">
            <div className="container">
                <div className={styles.aboutMe__top}>
                    <div className={styles.aboutMe__inner}>
                        <div className={styles.aboutMe__titleWrap}>
                            <span className={styles.aboutMe__titleText}>Здравствуйте! Я</span>
                            <h1 className={styles.aboutMe__title}>Ткачев Артем</h1>
                        </div>
                        <h2 className={styles.aboutMe__subTitle}>Frontend-разработчик</h2>
                        <p className={styles.aboutMe__text}>
                            Создаю удобные и продуманные интерфейсы на современных технологиях. Проходил обучение в Skillbox, 
                            работал над коммерческими и командными проектами. Постоянно прокачиваю свои навыки и изучаю новые подходы в разработке.
                        </p>
                        <a className={styles.aboutMe__btn} href="https://github.com/Vinlasy/my-portfolio.git" target="blank_">Посмотреть на GitHub</a>
                    </div>
                    <img className={styles.aboutMe__img} src={photo} alt="Моя фотография" />
                </div>
                
                <ul className={styles.aboutMe__social}>
                    <li className={styles.aboutMe__socialItem}>
                        <a className={styles.aboutMe__socialLink} href="tel:+79374307466">
                            <img src={phoneIcon} alt="Иконка телефона" width={24} height={24} aria-hidden={true}/>
                            <span>+7 (937) 430-74-66</span>
                        </a>
                    </li>
                    <li className={styles.aboutMe__socialItem}>
                        <a className={styles.aboutMe__socialLink} href="mailto:artem.tkachev.00@mail.ru">
                            <img src={emailIcon} alt="Иконка почты" width={24} height={24} aria-hidden={true}/>
                            <span>artem.tkachev.00@mail.ru</span>         
                        </a>
                    </li>
                    <li className={styles.aboutMe__socialItem}>
                        <a className={styles.aboutMe__socialLink} href="https://penza.hh.ru/resume/2c72551aff0c02c88a0039ed1f71316e55466e" target="blank_">
                            <img src={headhunterLogo} alt="Иконка HeadHunter" width={24} height={24} aria-hidden={true}/>
                            <span>HeadHunter.ru</span>  
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}