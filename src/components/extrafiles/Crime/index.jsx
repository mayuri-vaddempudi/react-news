import styles from "./crime.module.css";
import { articles } from "../../data/data.js"

const Crime = () => {
    const crimeArticles = articles.filter((article) => article.category === "crime");
    return (
        <div className={styles.sweden}>
            <h2>Crime News</h2>
            <div className={styles.grid}>
                {crimeArticles.map((article, index) => (
                    <div key={index} className={styles.card}>
                        <img src={`/images/${article.image}`}
                            alt={article.headline}
                        />
                        <h3>{article.headline}</h3>
                        <p>{article.deck}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Crime;