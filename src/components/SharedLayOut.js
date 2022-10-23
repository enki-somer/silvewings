import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import NavBar from './Home/FirstDom/NavBar'

const SharedLayOut = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />

        </>
    )
}

export default SharedLayOut