import styles from "./breaking.module.css";
import { articles } from "../../data/data.js";

const Breakingnews = () => {
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
        </div>
    );
};

export default Breakingnews;