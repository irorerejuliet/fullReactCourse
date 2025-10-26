import React from 'react'



const Header = () => {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));   
  }
  const descriptions = reactDescriptions[genRandomInt(2)];


  return (
    <div className='text-center py-24'>
      <img src="/images/juliet.jpg" alt="" className='w-[80px] text-center m-auto rounded-full '/>
      <h2 className='text-3xl font-bold text-green-500 py-3'>React Essentials</h2>
      <p className='text-white pt-6 text-xl font-bold'>
        {descriptions} React Concepts you will neeed for almost any app you are going to build!
        </p>
    </div>
  )
}

export default Header
