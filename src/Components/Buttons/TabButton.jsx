import React from 'react'

const TabButton = ({children}) => {
  return (
    <li className=''>
      <button className='hover:text-white hover:bg-purple-900 rounded-md py-1 px-4'>{children}</button>
    </li>
  )
}

export default TabButton
