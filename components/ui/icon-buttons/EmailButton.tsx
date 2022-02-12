import {MdAlternateEmail} from "react-icons/md";
import React from "react";
import styles from "../../header/Header.module.css";

const EmailButton = () => {
  return <MdAlternateEmail className={styles.iconButton} size={24}/>
}

export default EmailButton;