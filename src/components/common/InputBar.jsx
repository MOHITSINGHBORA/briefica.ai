import React from 'react'
import Button from './Button'

const InputBar = ({value, onChange, onClick}) => {

  const handleKeyDown = (e) =>{
    if(e.key==='Enter'){
      onClick()
    }
  }
  return (
   <div className='flex justify-center fixed bottom-10 left-5 right-5 bg-(--bg)'>
    <div className=' w-full max-w-2xl border-2 border-(--input-brdr) rounded-4xl px-3 p-2 flex justify-between '>
    <input 
    type="text" 
    value={value}
    onChange={onChange}
    onKeyDown={handleKeyDown}
    placeholder="ask anything.."
    className='outline-none flex-1 text-(--text)'
    />
    <Button onClick={onClick}/>
   </div>
   </div>
  )
}

export default InputBar