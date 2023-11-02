import React from 'react';

export interface menu {
    title: string
    description: string
    price: number
    amount: number
}

const menuList: menu[] =
    [{
        title: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        amount: 0,
    }, {
        title: "Schnitzel",
        description: "A german speciality!",
        price: 16.50,
        amount: 0,
    }
        , {
        title: "Barbeque Burger",
        description: "American,Raw,Meaty",
        price: 12.99,
        amount: 0,
    }
        , {
        title: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        amount: 0,
    }]

const MenuContext = React.createContext({
    menuList: menuList,
});



export default MenuContext;