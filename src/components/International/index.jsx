import styles from "./international.module.css";
import { articles } from "../../data/data.js"

const International = () => {
    const internationalArticles = articles.filter((article) => article.category === "world");
    return (
        <div className={styles.interNational}>
            <h2>International News</h2>
            <div className={styles.grid}>
                {internationalArticles.map((article, index) => (
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
export default International;