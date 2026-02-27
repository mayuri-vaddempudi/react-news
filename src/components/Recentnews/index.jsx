import styles from "./recent.module.css";


const RecentNews = ({ articles }) => {

    // Remove sports
    const filtered = articles.filter(
        article => article.category !== "sport"
    );

    // Get unique categories
    const categories = [...new Set(filtered.map(a => a.category))];

    // Pick RANDOM article from each category
    const recentArticles = categories.map(category => {
        const categoryArticles = filtered.filter(
            article => article.category === category
        );

        const randomIndex = Math.floor(
            Math.random() * categoryArticles.length
        );

        return categoryArticles[randomIndex];
    });

    return (
        <div className={styles.recent}>
            <h2>Recent News</h2>

            <div className={styles.grid}>
                {recentArticles.map((article, index) => (
                    <div key={index} className={styles.card}>
                        <h3>{article.headline}</h3>
                        <p>{article.deck}</p>
                        <p className={styles.belongs}>
                            <strong>{article.category}</strong>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentNews;