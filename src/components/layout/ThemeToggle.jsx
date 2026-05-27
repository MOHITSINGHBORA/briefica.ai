import { useState, useContext } from "react"
import { HiSun } from "react-icons/hi";
import { TbMoonFilled } from "react-icons/tb";
import {ThemeContext} from "../../context/ThemeContext";

const ThemeToggle = () => {
    const {dark, setDark} = useContext(ThemeContext)
  return (
    <button
    onClick={()=>{
        setDark(!dark)
    }}
    className="text-2xl"
    >
       {dark?<HiSun />:<TbMoonFilled />}
    </button>
      

     
  )
}

export default ThemeToggle