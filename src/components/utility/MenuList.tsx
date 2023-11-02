import React from "react";
import MenuForm from "./MenuForm";
import { useContext } from "react";
import MenuContext from "../store/Menu";

export const MenuList: React.FC = () => {
    const menuCtx = useContext(MenuContext)
    return (
        <ul>
            {menuCtx.menuList.map((item) =>
                <li key={item.title}>
                    <MenuForm
                        title={item.title}
                        amount={item.amount}
                        description={item.description}
                        price={item.price}
                    />
                </li>
            )
            }
        </ul>
    )
}

