import style from "./Introduction.module.css"
import Button from "../ui/button/Button";


function Introduction() {
    return (
        <div className={style.intro}>
            <h1>
                Hi, I Am Herdy Hardiyant
            </h1>
            <h3>
                Fullstack Web Developer
            </h3>
            <Button isDisable={false}>
                Resume
            </Button>

        </div>
    )
}

export default Introduction