import styles from "./Navbar.module.css"
import Button from "../UI/Button";
import { useEffect, useState } from "react";

const Navbar: React.FC<{ count: number, menuShowModal: () => void }> = (props) => {
    const [cartChange, setCartChange] = useState(false);

    useEffect(() => {
        if (props.count > 0) {
            setCartChange(true);
            const timer = setTimeout(() => {
                setCartChange(false);
            }, 150); // Ganti dengan waktu yang Anda inginkan (dalam milidetik)
            return () => clearTimeout(timer); 
        }
    }, [props.count]);

    return (
        <nav className={styles.navBar}>
            <p className={styles.logo}>FOA</p>
            <Button primary onClick={props.menuShowModal} className={`${cartChange ? styles.bump : ""}`}>
                🛒 Your Cart {props.count}
            </Button>
        </nav>
    );
};


export default Navbar;