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
        <section className={styles.skills}>
            <div className="container">
                <h2 className={styles.skills__title}>Мои навыки</h2>
                <div className={styles.skills__wrapper}>
                    <div className={styles.skills__inner}>
                        <p className={styles.skills__text}>
                            Изучение новых навыков Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ad dignissimos temporibus consequuntur rerum 
                            eum enim itaque voluptatum quo repellendus animi?
                        </p>
                    </div>
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