import styles from "./sports.module.css";

const Sports = ({ articles }) => {
    // Filter only sports articles
    const sportsArticles = articles.filter(article => article.category === "sport");

    // Shuffle the sports articles randomly
    const shuffledSports = [...sportsArticles].sort(() => Math.random() - 0.5);

    // Pick 2 random articles
    const randomSports = shuffledSports.slice(0, 2);

    return (
        <div className={styles.sports}>
            <h2>Sports News</h2>
            <div className={styles.sportsLayout}>
                {randomSports.map((article, index) => (
                    <div key={index} className={styles.sportsCard}>
                        <img src={`/images/${article.image}`} alt={article.headline} />
                        <div className={styles.sportsContent}>
                            <span className={styles.category}>{article.category}</span>
                            <h3>{article.headline}</h3>
                            <p>{article.deck}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sports;