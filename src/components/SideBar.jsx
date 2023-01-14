import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaBars, FaShoppingBasket, FaShoppingCart, FaShoppingBag, FaSignInAlt, FaAngleDoubleUp } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import "../App.css"
import { NavLink } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AppRoutingConfig } from '../configs/AppRoutingConfig'

const routes = [
    {
        path: AppRoutingConfig.APP_URL_HOME,
        name: 'Home',
        icon: <FaHome />
    },
    {
        path: AppRoutingConfig.APP_URL_SIGNIN,
        name: 'Sign In',
        icon: <FaSignInAlt />
    },
    {
        path: AppRoutingConfig.APP_URL_SIGNUP,
        name: 'Sign Up',
        icon: <FaAngleDoubleUp />
    },
    {
        path: AppRoutingConfig.APP_URL_PRODUCT,
        name: 'Product',
        icon: <FaShoppingBag />
    },
    {
        path: AppRoutingConfig.APP_URL_PRODUCT_LIST,
        name: 'Product List',
        icon: <FaShoppingBasket />
    },
    {
        path: AppRoutingConfig.APP_URL_CART_LIST,
        name: 'Cart',
        icon: <FaShoppingCart />
    },
]

const SideBar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isPosition, setIsPosition] = useState('none')

    const toggle = () => setIsOpen((prevValue) => !prevValue)

    const positionToggle = () => setIsPosition((prevValue) => {
        console.log(prevValue)
        if (prevValue === 'none') {
            return 'absolute'
        }
        else if (prevValue === 'absolute') {
            return 'none'
        }
    })

    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            opacity: 0
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    }

    const headerAnimation = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', overflow:'hidden' }}>
            <motion.div animate={{ width: isOpen ? "220px" : "40px", zIndex: 100 }} onMouseOver={toggle} onMouseOut={toggle} className="sideBar">
                <div className="top_section">
                    <AnimatePresence>
                        {
                            isOpen &&
                            <motion.h1
                                variants={headerAnimation}
                                className='logo'
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                            >
                                ECommerce
                            </motion.h1>
                        }
                    </AnimatePresence>
                    <div className='bars'>
                        <FaBars />
                    </div>
                </div>
                <div className='search_section'>
                    <div className='search'>
                        <BiSearch />
                    </div>
                    <AnimatePresence>
                        {
                            isOpen &&
                            <motion.input
                                variants={inputAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                placeholder='Search...' />
                        }
                    </AnimatePresence>

                </div>
                <section className='routes_section'>
                    {
                        routes.map((route) => (
                            <NavLink to={route.path} key={route.name} className="link">
                                <div className="icon">{route.icon}</div>
                                <AnimatePresence>
                                    {
                                        isOpen &&
                                        <motion.div className="link_text">{route.name}</motion.div>
                                    }
                                </AnimatePresence>
                            </NavLink>
                        ))
                    }
                </section>
            </motion.div>

            <main style={{ position: 'absolute', marginLeft: '40px' }}>{children}</main>
        </div>
    )
}

export default SideBar