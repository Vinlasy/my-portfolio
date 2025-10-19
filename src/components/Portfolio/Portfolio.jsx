import "../../styles/style.scss";
import styles from "./Portfolio.module.scss";

import OptimaAiImg from "../../assets/images/OptimaAiSolution.png";
import TruyevPark from "../../assets/images/TruyevPark.png";
import SkillBoxProject from "../../assets/images/SkillBoxProject.png";
import CESPnz from "../../assets/images/CESPnz.png";

export const Portfolio = () => {

    const myProjects = [
        {
            title: 'Центр инженерных систем',
            text: 'В проекте с готовой вёрсткой занимался исправлением ошибок и доработкой адаптива. Добавил несколько новых секций и улучшил визуальное оформление: унифицировал шрифты, отступы и цвета, создав единый UI-стиль.',
            devStack: ["HTML", "CSS", "JS"],
            imgSrc: CESPnz,
        },
        {
            title: 'Optima AI Solution',
            text: 'Проект молодой команды разработчиков. Отвечал за вёрстку и анимацию около 60% блоков, а также следил за адаптивностью.',
            devStack: ["HTML", "CSS", "SCSS", "JS", "GSAP"],
            imgSrc: OptimaAiImg,
        },
        {
            title: 'Труёв парк',
            text: 'Сайт-портфолио для диссертации друга. Провёл рефакторинг кода, реализовал адаптивную вёрстку и анимации, исправил ошибки в существующих блоках.',
            devStack: ["HTML", "CSS", "JS"],
            imgSrc: TruyevPark,
        },
        {
            title: 'Учебный проект в рамках курса «Frontend-разработчик» от Skillbox',
            text: '',
            devStack: [],
            imgSrc: '',
        },
    ]

    return (
        <section className={styles.portfolio}>
            <div className="container">
                <h2 className={styles.portfolio__title}>Мои проекты</h2>
                <div className={styles.portfolio__wrapper}>
                    {myProjects.map((item) => 
                        <div className={styles.portfolio__card}>
                            <img className={styles.portfolio__cardImg} src={item.imgSrc} alt="Изображение проекта" />
                            <div className={styles.portfolio__cardInner}>
                                <h3 className={styles.portfolio__cardTitle}>{item.title}</h3>
                                <p className={styles.portfolio__cardText}>{item.text}</p>

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