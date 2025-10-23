import "../../styles/style.scss";
import styles from "./Portfolio.module.scss";

import OptimaAiImg from "../../assets/images/OptimaAiSolution.png";
import TruyevPark from "../../assets/images/TruyevPark.png";
import SkillBoxProject from "../../assets/images/SkillBoxProject.png";
import CESPnz from "../../assets/images/CESPnz.png";
import squaresIcon from "../../assets/svg/squares-label.svg";
import arrowRightIcon from "../../assets/svg/arrow-right-icon.svg"

export const Portfolio = () => {

    const myProjects = [
        {
            title: 'Учебный проект в рамках курса «Frontend-разработчик» от Skillbox',
            text: 'Сайт представляет собой страницу каталога для интернет-магазина. Работа проводилась с уже готовой разметкой и стилями.',
            devStack: ["JS", "Swiper.js", "Just Validate", "Tippy.js"],
            imgSrc: SkillBoxProject,
            webLink: 'https://frolicking-shortbread-0e1412.netlify.app/catalog.html',
            repoLink: 'https://github.com/Vinlasy/practical-work-JS',
        },
        {
            title: 'Центр инженерных систем',
            text: 'В проекте с готовой вёрсткой занимался исправлением ошибок и доработкой адаптива. Добавил несколько новых секций и улучшил визуальное оформление: унифицировал шрифты, отступы и цвета, создав единый UI-стиль.',
            devStack: ["HTML", "CSS", "JS"],
            webLink: 'https://ces-penza.ru/',
            imgSrc: CESPnz,
        },
        {
            title: 'Optima AI Solution',
            text: 'Проект молодой команды разработчиков. Отвечал за вёрстку и анимацию около 60% блоков, а также следил за адаптивностью.',
            devStack: ["HTML", "CSS", "SCSS", "JS", "GSAP"],
            webLink: 'https://optima-ai-agent.com/',
            imgSrc: OptimaAiImg,
        },
        {
            title: 'Труёв парк',
            text: 'Сайт-портфолио для диссертации друга. Провёл рефакторинг кода, реализовал адаптивную вёрстку и анимации, исправил ошибки в существующих блоках.',
            devStack: ["HTML", "CSS", "JS"],
            webLink: 'https://deploy-preview-2--truev-park.netlify.app/',
            imgSrc: TruyevPark,
        },
    ]

    return (
        <section className={styles.portfolio}>
            <div className="container">
                <h2 className={styles.portfolio__title}>Мои проекты</h2>
                <div className={styles.portfolio__wrapper}>
                    {myProjects.map((item) => 
                        <div className={styles.portfolio__card} href={item.webLink}>
                            <a className={styles.portfolio__cardLink} href={item.webLink} target="blank_">
                                <img className={styles.portfolio__cardImg} src={item.imgSrc} alt="Изображение проекта"/>
                                <span className={styles.portfolio__cardLinkSeeMore}>
                                    <span>Перейти на сайт</span>
                                    <img src={arrowRightIcon} alt="Иконка стрелки" width={20} height={20} aria-hidden={false}/>
                                </span>
                            </a>
                            <div className={styles.portfolio__cardInner}>
                                <div className={styles.portfolio__cardInnerTop}>
                                    <img src={squaresIcon} alt="Иконка квадрата" width={20} height={20} aria-hidden={false}/>
                                    <h3 className={styles.portfolio__cardTitle}>{item.title}</h3>
                                </div>
                                <p className={styles.portfolio__cardText}>{item.text}</p>

                                {item.repoLink && (
                                    <a className={styles.portfolio__cardTextLink} href={item.repoLink} target="blank_">Репозиторий на GitHub</a>
                                )}

                                <ul className={styles.portfolio__cardList}>
                                    {item.devStack.map((item) =>
                                        <li className={styles.portfolio__cardItem}>{item}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}