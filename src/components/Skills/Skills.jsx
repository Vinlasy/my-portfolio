import "../../styles/style.scss";
import styles from "./Skills.module.scss";

export const Skills = () => {
    const mySkills = [
        "HTML",
        "CSS",
        "SCSS",
        "БЭМ",
        "Git",
        "JavaScript",
        "TypeScript",
        "React",
        "Figma",
        "Illustrator",
    ];

    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <h2 className={styles.skills__title}>Мои навыки</h2>
                <div className={styles.skills__wrapper}>
                    <p className={styles.skills__text}>
                        Люблю учиться и погружаться в новые технологии. 
                        Регулярно прокачиваю навыки и практикую их в личных проектах, 
                        чтобы расти как разработчик и делать интерфейсы лучше.
                    </p>
                    <ul className={styles.skills__list}>
                        {mySkills.map((item) =>
                            <li className={styles.skills__item}>{item}</li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}