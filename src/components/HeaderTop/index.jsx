import SocialMedia from "../SocialMedia";
import Number from "../Number";
import styles from "./headetop.module.css"

const HeaderTop = () => {
    return (
        <div className={styles.headerTop}>
            <div className={styles.socialMedia}>
                <SocialMedia />
            </div>
            <div className={styles.title}>
                <h1>News Of the World</h1>
            </div>
            <div className={styles.number}>
                <Number />
            </div>
        </div>
    )
}
export default HeaderTop;