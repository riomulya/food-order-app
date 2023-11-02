import Button from "../UI/Button"
import styles from "./MenuModalBox.module.css"

type menu = {
    title: string
    description: string
    price: number
    amount: number
}

interface ErrorModalBoxProps {
    menuOrder: menu[];
    onRemove: () => void;
}

export const MenuModalBox: React.FC<ErrorModalBoxProps> = (props) => {
    const totalAllPrice = props.menuOrder.reduce((acc, obj) => {
        return acc + (obj.amount * obj.price)
    }, 0)

    const content = props.menuOrder.map((item) =>
        <div key={item.title}>
            <h6>{item.title}</h6>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <p>{item.amount}</p>
            <p>Total Price {(item.amount * item.price).toFixed(2)}</p>
        </div>
    )


    return (
        <>
            <div onClick={props.onRemove} className={styles["error-overlay"]}></div>
            {content}
            <h1>Total All Product Price $ {totalAllPrice}</h1>
            <Button onClick={props.onRemove}>Okay</Button>
        </>
    )
}