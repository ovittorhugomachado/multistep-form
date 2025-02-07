import { createContext, useState } from "react";

export const PaymentContext = createContext()

export const plans = {
    month: {
        positionXButton: '3px',
        suffix: "/mo",
        plans: [
            {
                key: 0,
                image: '/icon-arcade.svg',
                name: 'Arcade',
                price: 9,
            },
            {
                key: 1,
                image: '/icon-advanced.svg',
                name: 'Advanced',
                price: 12,
            },
            {   
                key: 2,
                image: '/icon-pro.svg',
                name: 'Pro',
                price: 15,
            }
        ],
        additionals: [
            {
                key: 0,
                name: "Online service",
                price: 1,
                description: "Access to multiplayer game"
            },
            {
                key: 1,
                name: "Larger storage",
                price: 2,
                description: "Extra 1TB of cloud save "
            },
            {
                key: 2,
                name: "Customizable Profile",
                price: 2,
                description: "Custom theme on your profile"
            }
        ]
    },
    year: {
        positionXButton: '23px',
        suffix: "/yr",
        plans: [
            {
                key: 0,
                image: '/icon-arcade.svg',
                name: 'Arcade',
                price: 90,
            },
            {
                key: 1,
                image: '/icon-advanced.svg',
                name: 'Advanced',
                price: 120,
            },
            {
                key: 2,
                image: '/icon-pro.svg',
                name: 'Pro',
                price: 150,
            }
        ],
        additionals: [
            {
                key: 0,
                name: "Online service",
                price: 10,
                description: "Access to multiplayer game"
            },
            {
                key: 1,
                name: "Larger storage",
                price: 20,
                description: "Extra 1TB of cloud save"
            },
            {
                key: 2,
                name: "Customizable profile",
                price: 20,
                description: "Custom theme on your profile"
            }
        ]
    }
};

export const PaymentProvider = ({children}) => {

    const [ payment, setPayment] = useState(plans.month)

    const changePayment = () => {
        setPayment((prevPlan) => prevPlan === plans.month ? plans.year : plans.month)
    }

    return (
        <PaymentContext.Provider value={{payment, setPayment, changePayment }}>
            {children}
        </PaymentContext.Provider>
    )
}