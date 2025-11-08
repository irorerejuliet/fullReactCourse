

import React from 'react'

const CoreConcepts = ({image, title, description}) => {
  return (
    <div className='text-white bg-pink-600  text-lg font-bold'>
      <li>
      <img src={image} alt="star" className='w-30'/>
      <h2 className='ml-16'>{title} </h2>
      <p className='ml-8'>{description}</p>
      </li>
    </div>
  )
}

export default CoreConcepts
