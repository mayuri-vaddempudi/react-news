
import FocusNext from "../Focusnext";
import styles from "./infocus.module.css";


const Infocus = ({ focusArticle, nextArticles }) => {
    if (!focusArticle) return null;
    const { image, category, headline, deck, story } = focusArticle;
    return (
        <div className={styles.recent}>

            <div className={styles.layout}>

                {/* LEFT - BIG RANDOM NEWS */}
                <div className={styles.focus}>
                    <img
                        src={`/images/${image}`}
                        alt={headline}
                    />
                    <div className={styles.focusContent}>
                        <span className={styles.category}>
                            {category}
                        </span>
                        <h3>{headline}</h3>
                        <p>{deck}</p>
                        <p>{story}</p>
                    </div>
                </div>

                {/* RIGHT - 3 RANDOM NEWS */}
                <FocusNext nextArticles={nextArticles} />
            </div>
        </div>
    );
};

export default Infocus;