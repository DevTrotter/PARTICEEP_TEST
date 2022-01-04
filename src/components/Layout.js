import React from 'react'
import { Header } from './Header/Header'
import '../style/global.css'

export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}