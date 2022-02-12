import {FaGithub} from "react-icons/fa";
import React from "react";
import styles from "../../header/Header.module.css";

const GithubButton:React.FC = () => {
  return <FaGithub className={styles.iconButton} size={24}/>

}

export default GithubButton;