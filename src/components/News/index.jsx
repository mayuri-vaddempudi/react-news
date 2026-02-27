import styles from "./news.module.css";
import Breakingnews from "../Breakingnews";
import International from "../International";
import Sports from "../Sports";
import RecentNews from "../Recentnews";
import Infocus from "../Infocus";
import { articles } from "../../data/data";
import FocusNext from "../Focusnext";

const News = () => {
    const filtered = articles.filter(article => article.category !== "sport")

    const shuffled = [...filtered].sort(() => 0.5 - Math.random());

    const focusArticle = shuffled[0];
    const nextArticles = shuffled.slice(1, 4);

    return (
        <div className={styles.news}>
            <Breakingnews articles={articles} />
            <div className={styles.newsFocus}>
                <RecentNews articles={articles} />
                <div>
                    <Infocus focusArticle={focusArticle} nextArticles={nextArticles} />

                </div>

            </div>

            <Sports articles={articles} />
            <International articles={articles} />
        </div>
    )
}
export default News;