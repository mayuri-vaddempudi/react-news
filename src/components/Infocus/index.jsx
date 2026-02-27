import styles from "./infocus.module.css";

const Infocus = ({ article }) => {
    if (!article) return null;

    const { image, category, headline, deck, story } = article;

    return (
        <div className={styles.main}>
            <img
                src={`/images/${image}`}
                alt={headline}
                className={styles.image}
            />

            <div className={styles.content}>
                <span className={styles.category}>
                    {category}
                </span>

                <h2 className={styles.headline}>
                    {headline}
                </h2>

                <p className={styles.deck}>
                    {deck}
                </p>
                <p className={styles.story}>
                    {story}
                </p>
            </div>
        </div>
    );
};

export default Infocus;