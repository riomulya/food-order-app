import { ReactNode } from "react";
import styles from "./Button.module.css"

interface btnProp {
    invalid?: boolean;
    type?: "button" | "submit" | "reset";
    primary?: boolean;
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}

const Button: React.FC<btnProp> = (props) => {
    const btnClass = `${props.invalid ? styles.invalid : ""} ${props.primary ? styles.primary : ""} `

    return (
        <button
            className={`${btnClass} ${props.className}`}
            type={props.type}
            onClick={props.onClick}
        >{props.children}
        </button>
    )
}

export default Button;