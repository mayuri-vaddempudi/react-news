import SocialMedia from "../SocialMedia";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {/* Brand / Company Info */}
                <div className={styles.brand}>
                    <h2>News of the World</h2>
                    <p>Stay updated with the latest news</p>
                </div>

                {/* Company Links */}
                <div className={styles.company}>
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className={styles.nav}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#breaking">Breaking News</a></li>
                        <li><a href="#sports">Sports</a></li>
                        <li><a href="#international">International</a></li>
                        <li><a href="#recent">Recent News</a></li>
                    </ul>
                </div>

                {/* Subscribe & Social */}
                <div className={styles.subscribe}>
                    <h4>Subscribe</h4>
                    <p>Get the latest news in your inbox</p>
                    <form className={styles.subscribeForm}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                    <div className={styles.social}>
                        <SocialMedia />
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} NewsPortal. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;