import styles from "./entertainment.module.css";
import { articles } from "../../data/data.js"

const Entertainment = () => {
    const EntertainmentArticles = articles.filter((article) => article.category === "entertainment");
    return (
        <div className={styles.sweden}>
            <h2>Entertainment News</h2>
            <div className={styles.grid}>
                {EntertainmentArticles.map((article, index) => (
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
export default Entertainment;