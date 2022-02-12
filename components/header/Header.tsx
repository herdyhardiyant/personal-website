import styles from "./Header.module.css";
import GithubButton from "../ui/icon-buttons/GithubButton";
import Line from "../ui/line/Line";
import EmailButton from "../ui/icon-buttons/EmailButton";
import LinkedInButton from "../ui/icon-buttons/LinkedInButton";
function Header() {


    return (
        <>
            <div className={styles.header}>
                <h3>Herdy Hardiyant</h3>
                <div className={styles.actions}>
                    <GithubButton/>
                    <LinkedInButton/>
                    <EmailButton/>
                </div>
            </div>
            <Line/>
        </>
    )

}

export default Header;
