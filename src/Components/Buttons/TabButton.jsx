import React from 'react'

const TabButton = ({children, onSelect}) => {
  
  return (
    <li className=''>
      <button onClick={onSelect} className='hover:text-white hover:bg-purple-900 rounded-md py-1 px-4'>{children}</button>
    </li>
  )
}

export default TabButton
