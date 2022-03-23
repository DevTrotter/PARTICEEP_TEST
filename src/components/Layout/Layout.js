import React from 'react'
import { Header } from '../Header/Header'
import '../../style/global.css'
import StyledLayout from './StyledLayout'

export const Layout = ({children}) => {
    return (
        <StyledLayout>
            <Header/>
            {children}
            <div className="background">
                <div className="background-img"></div>
            </div>
        </StyledLayout>
    )
}