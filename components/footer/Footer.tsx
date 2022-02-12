import React from "react";
import GithubButton from "../ui/icon-buttons/GithubButton";
import LinkedInButton from "../ui/icon-buttons/LinkedInButton";
import EmailButton from "../ui/icon-buttons/EmailButton";
import styles from "./Footer.module.css"

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <GithubButton/>
            <LinkedInButton/>
            <EmailButton/>
            <h3>Herdy Hardiyant</h3>
        </footer>
    )
}

export default Footer;