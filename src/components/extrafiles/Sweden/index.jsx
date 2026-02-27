import styles from "./sweden.module.css";


const Sweden = ({ articles }) => {
    const swedenArticles = articles.filter((article) => article.category === "sweden");
    return (
        <div className={styles.sweden}>
            <h2>Sweden News</h2>
            <div className={styles.grid}>
                {swedenArticles.map((article, index) => (
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
export default Sweden;