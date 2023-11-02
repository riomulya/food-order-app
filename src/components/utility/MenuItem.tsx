import React, { forwardRef } from "react";
import Button from "../UI/Button";

type menu = {
    title: string;
    description: string;
    price: number;
    amount: number;
}

interface menuProps {
    menu: menu;
}

const MenuItem: React.ForwardRefRenderFunction<HTMLInputElement, menuProps> = (props, ref) => {
    return (
        <li className="flex justify-between p-3">
            <div className="flex flex-col justify-center">
                <h6 className="font-semibold text-xl p-1">{props.menu.title}</h6>
                <p className="text-xl p-1"><i>{props.menu.description}</i></p>
                <p className="p-1 font-bold text-xl text-emerald-900">$ {props.menu.price}</p>
            </div>
            <div className="flex flex-col">
                <div className="p-2">
                    <label htmlFor={props.menu.title} className="font-semibold">Amount</label>
                    <input type="number" className={`${props.menu.title} amount rounded-lg w-10 ms-3 my-2 outline outline-indigo-300`} min="1" defaultValue={1} ref={ref} />
                </div>
                <Button className="bg-amber-200 font-semibold outline rounded-xl outline-gray-500 hover:scale-110 transition delay-150 duration-300 ease-in-out p-1" type="submit">+ Add</Button>
            </div>
        </li>
    );
}

export default forwardRef<HTMLInputElement, menuProps>(MenuItem);
