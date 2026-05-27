import React from 'react'
import ThemeToggle from '../layout/ThemeToggle'

const Navbar = () => {
   return (
         <div className=' max-w-7xl m-auto flex justify-between fixed top-0 left-7 right-7 bg-(--bg) py-5'>
            <h1 className='font-bold'>briefica.ai</h1>
            <ThemeToggle />
         </div>
   )
}

export default Navbar