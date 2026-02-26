import { articles } from "../../data/data";
import styles from "./infocus.module.css";

const Infocus = () => {

    // Exclude sports
    const filtered = articles.filter(
        article => article.category !== "sport"
    );

    // Shuffle array (random order every refresh)
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());

    // Pick first 4 after shuffle
    const focusArticle = shuffled[0];
    const nextArticles = shuffled.slice(1, 4);

    return (
        <div className={styles.recent}>
            <h2>Recent News</h2>

            <div className={styles.layout}>

                {/* LEFT - BIG RANDOM NEWS */}
                <div className={styles.focus}>
                    <img
                        src={`/images/${focusArticle.image}`}
                        alt={focusArticle.headline}
                    />
                    <div className={styles.focusContent}>
                        <span className={styles.category}>
                            {focusArticle.category}
                        </span>
                        <h3>{focusArticle.headline}</h3>
                        <p>{focusArticle.deck}</p>
                        <p>{focusArticle.story}</p>
                    </div>
                </div>

                {/* RIGHT - 3 RANDOM NEWS */}
                <div className={styles.side}>
                    {nextArticles.map((article, index) => (
                        <div key={index} className={styles.smallCard}>
                            <img
                                src={`/images/${article.image}`}
                                alt={article.headline}
                            />
                            <div>
                                <span className={styles.category}>
                                    {article.category}
                                </span>
                                <h4>{article.headline}</h4>
                                <p>{focusArticle.deck}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Infocus;