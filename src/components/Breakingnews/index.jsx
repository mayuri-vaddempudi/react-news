import styles from "./breaking.module.css";

const Breakingnews = ({ articles }) => {
    // Get current date
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
    });
    return (
        <div className={styles.breaking}>
            <h3 className={styles.title}>Breaking News:</h3>

            <ul className={styles.list}>
                {articles.slice(0, 4).map((article, index) => (
                    <li key={index} className={styles.item}>
                        {article.headline}

                        {/* Show arrow except last item */}
                        {index < 3 && <span className={styles.arrow}> ➤ </span>}
                    </li>
                ))}
            </ul>
            <span className={styles.date}>{formattedDate}</span>
        </div>
    );
};

export default Breakingnews;