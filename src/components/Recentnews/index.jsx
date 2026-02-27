import styles from "./recent.module.css";


const RecentNews = ({ articles }) => {

    return (
        <div className={styles.recent}>
            <h2>Recent News</h2>


            {articles.map((article, index) => (
                <div key={index} className={styles.card}>
                    <h3>{article.headline}</h3>
                    <p>{article.deck}</p>
                    <p className={styles.category}>
                        <strong>{article.category}</strong>
                    </p>
                </div>
            ))}
        </div>

    );
};

export default RecentNews;