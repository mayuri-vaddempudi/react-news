import styles from "./sports.module.css"
import { articles } from "../../data/data.js";

const Sports = () => {
    const sportsArticles = articles.filter((article) => article.category === "sport");
    return (
        <div className={styles.sports}>
            <h2>Sports News</h2>
            <div className={styles.sportsLayout}>
                <div className={styles.sportsFocus}>
                    {sportsArticles.slice(0, 1).map((article, index) => (
                        <div key={index} className={styles.focusCard}>

                            <img src={`/images/${article.image}`}
                                alt={article.headline}
                            />

                            <h3>{article.headline}</h3>
                            <p>{article.deck}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.sportsNext}>
                    {sportsArticles.slice(1, 4).map((article, index) => (
                        <div key={index} className={styles.smallCard}>

                            <img src={`/images/${article.image}`}
                                alt={article.headline}
                            />
                            <div className={styles.smallCardFlex}>
                                <h3>{article.headline}</h3>
                                <p>{article.deck}</p>
                                <p><b>Category :</b> {article.category}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Sports;