import HeaderTop from "../HeaderTop";
import Navigation from "../Navigation";
import styles from "./header.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerTitle}>
                <HeaderTop />
                <Navigation />
            </div>
        </div>
    )
}
export default Header;