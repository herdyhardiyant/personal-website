import React from "react";
import styles from "./Portfolio.module.css"
import Button from "../ui/button/Button";
import Card from "../ui/Card/Card";

const Portfolio: React.FC = () => {
    return (
        <Card className={styles.portfolio}>
            <h3>Title</h3>
            <p>Description</p>
            <Button isDisable={false}>Look</Button>
        </Card>
    )
}

export default Portfolio