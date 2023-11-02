import React, { ReactNode, useContext, useEffect, useState } from "react";
import Header from "../layout/Header";
import Navbar from "../layout/Navbar";
import Card from "../UI/Card";
import { MenuList } from "../utility/MenuList";
import ReactDOM from 'react-dom';
import { MenuModalBox } from "../overlay/MenuModalBox";
import MenuContext from "../store/Menu";

const ModalPortal: React.FC<{ children: ReactNode }> = ({ children }) => {
    const modalRoot = document.getElementById('modal-root') as HTMLElement;
    return ReactDOM.createPortal(children, modalRoot);
};

const RootPortal: React.FC<{ children: ReactNode }> = ({ children }) => {
    const modalRoot = document.getElementById('root') as HTMLElement;
    return ReactDOM.createPortal(children, modalRoot);
};

interface menuList {
    title: string
    description: string
    price: number
    amount: number
}

const Home = () => {
    const [menuShow, setMenuShow] = useState(false)
    const [menuItem, setMenuItem] = useState<number>(0)
    const [menuOrder, setMenuOrder] = useState<menuList[]>([])
    const menuList = useContext(MenuContext).menuList;



    useEffect(() => {
        const timer = setTimeout(() => {
            const val = menuList.reduce((acc, obj) => {
                return acc + obj.amount;
            }, 0);
            setMenuOrder(menuList.filter((el) => {
                return el.amount > 0 && el.amount !== 0
            }))
            setMenuItem(val);
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, [menuItem, menuList, menuOrder]);


    const removeModal = () => {
        console.log(menuShow);
        console.log({ menuOrder })
        setMenuShow(false)
    }

    const showModal = () => {
        console.log(menuShow);
        setMenuShow(true)
    }

    return (
        <React.Fragment>
            <RootPortal>
                <Navbar count={menuItem} menuShowModal={showModal} />
                <Header></Header>
                <main className="mt-48 w-full flex justify-center">
                    <Card className="bg-sky-200 w-1/2">
                        <MenuList />
                    </Card>
                </main>
            </RootPortal>
            {menuShow && <ModalPortal>
                <MenuModalBox onRemove={removeModal} menuOrder={menuOrder} />
            </ModalPortal>}
        </React.Fragment>
    )
}

export default Home;