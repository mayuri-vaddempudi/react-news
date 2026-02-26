import styles from "./news.module.css";
import Breakingnews from "../Breakingnews";
import International from "../International";
import Sports from "../Sports";
import RecentNews from "../Recentnews";
import Infocus from "../Infocus";

const News = () => {
    return (
        <div className={styles.news}>
            <Breakingnews />
            <div className={styles.newsFocus}>
                <RecentNews />
                <Infocus />
            </div>

            <Sports />
            <International />
        </div>
    )
}
export default News