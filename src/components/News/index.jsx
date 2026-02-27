import styles from "./news.module.css";
import Breakingnews from "../Breakingnews";
import International from "../International";
import Sports from "../Sports";
import RecentNews from "../Recentnews";
import Infocus from "../Infocus";
import { articles } from "../../data/data";


const News = () => {
    // Remove sport for top section
    const nonSport = articles.filter(article => article.category !== "sport")

    // Shuffle non-sport articles
    const shuffled = [...nonSport].sort(() => Math.random() - 0.5);
    const focusArticle = shuffled[0];

    // Get unique categories
    const categories = [...new Set(nonSport.map(a => a.category))];

    const recentArticles = categories.map(category => {
        const categoryArticles = nonSport.filter(
            article => article.category === category
        );

        const randomIndex = Math.floor(
            Math.random() * categoryArticles.length
        );

        return categoryArticles[randomIndex];
    });
    return (
        <div className={styles.news}>
            <Breakingnews articles={articles} />
            <div className={styles.topSection}>
                <RecentNews articles={recentArticles} />

                <Infocus article={focusArticle} />

                <Sports articles={articles} />

            </div>


            <International articles={articles} />
        </div>
    )
}
export default News;