import styles from "./social.module.css";
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>

const SocialMedia = () => {
    return (
        <div className={styles.socialMedia}>
            <ul>

                <li><a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://x.com/" target="_blank"><i className="fab fa-twitter"></i></a> </li>
                <li><a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a> </li>
                <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a> </li>

            </ul>
        </div >
    )
}
export default SocialMedia;