import styles from "./focusnext.module.css"

const FocusNext = ({ nextArticles }) => {
    return (
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
                        <p>{article.deck}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default FocusNext;

