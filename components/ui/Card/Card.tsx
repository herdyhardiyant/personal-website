import React from "react";
import styles from "./Card.module.css"

interface CardProps {
    className: string | undefined
}

const Card: React.FunctionComponent<CardProps> = (props) => {
   const {children, className} = props;

    return (
        <div className={`${styles.Card} ${className}`}>
            {children}
        </div>
    )
}

export default Card