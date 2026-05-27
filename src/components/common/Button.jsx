import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
 
const Button = ({onClick}) => {
  return (
    <button
     onClick={onClick}
    className='bg-(--btn-bg) rounded-4xl p-2  text-white cursor-pointer hover:bg-(--btn-hvr)'
     
    >
      <FaArrowUp />
    </button>
  )
}

export default Button