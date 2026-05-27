import React from 'react'
import Home from '../pages/Home'
import Navbar from '../components/layout/Navbar'

const Layout = () => {
    return (
        <div className='min-h-screen w-full bg-(--bg) text-(--text)'>
            <div className='max-w-7xl m-auto p-3'>
                <Navbar />
                <Home />
            </div>
        </div>
    )
}
export default Layout