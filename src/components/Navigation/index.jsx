import styles from "./nav.module.css"

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <ul className={styles.menu}>
                <li><a href="/">Home</a></li>
                <li><a href="/world">World</a></li>
                <li><a href="/sweden">Sweden</a></li>
                <li><a href="/sport">Sport</a></li>
                <li><a href="/entertainment">Entertainment</a></li>
                <li><a href="/crime">Crime</a></li>
            </ul>
        </div>
    )
}
export default Navigation;