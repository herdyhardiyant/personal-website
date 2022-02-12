import React from "react";
import style from "./SectionDivider.module.css"
import Line from "../line/Line";

const  SectionDivider:React.FC<{sectionName: string}> = ({sectionName}) => {

    return(
        <div className={style.sectionDivider}>
                <h3>
                    {sectionName}
                </h3>
            <div className={style.line}>
                <Line/>
            </div>
        </div>
    )
}

export default SectionDivider