import React from "react";
import Portfolio from "./Portfolio";
import styles from "./Portfolios.module.css"

const Portfolios:React.FunctionComponent = () => {

    return(
        <div className={styles.portfolios}>
            <Portfolio/>
            <Portfolio/>
            <Portfolio/>
        </div>
    )
}

export default Portfolios