import React, { useContext, useRef } from "react"
import MenuContext from "../store/Menu";
import MenuItem from "./MenuItem";

type menu = {
    title: string
    description: string
    price: number
    amount: number
}


const MenuForm: React.FC<menu> = (props) => {
    const menuCtx = useContext(MenuContext);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        for (const item of menuCtx.menuList) {
            if (item.title === props.title) {
                item.amount += +inputRef.current!.value;
            }
        }
        console.log(menuCtx.menuList)
    };
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <MenuItem
                    ref={inputRef}
                    menu={{
                        title: props.title,
                        description: props.description,
                        amount: props.amount,
                        price: +props.price,
                    }} />
            </form>
        </>
    )
}

export default MenuForm;