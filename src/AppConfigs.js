import React from 'react'
import {AppRoutingConfig} from './configs/AppRoutingConfig'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register'


export const routes = [
    {
        path:AppRoutingConfig.APP_URL_HOME,
        component:Home
    },
    {
        path:AppRoutingConfig.APP_URL_SIGNIN,
        component:Login
    },
    {
        path:AppRoutingConfig.APP_URL_PRODUCT,
        component:Product
    },
    {
        path:AppRoutingConfig.APP_URL_PRODUCT_LIST,
        component:ProductList
    },
    {
        path:AppRoutingConfig.APP_URL_CART_LIST,
        component:Cart
    },
    {
        path:AppRoutingConfig.APP_URL_SIGNUP,
        component:Register
    },

]
