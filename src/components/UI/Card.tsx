import React, { ReactNode } from "react";
import styles from "./Card.module.css"

interface CardComponentProp{
    style?: React.CSSProperties;
    className?:string;
    children:ReactNode;
}


const Card:React.FC<CardComponentProp> = (props)=>{
    return(
        <div className={`${styles.card} ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
}

export default Card;