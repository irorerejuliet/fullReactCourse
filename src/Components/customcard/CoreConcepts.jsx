// import React from "react";

// const CoreConcepts = ({ title = "", description = "" }) => {
//   return (
   
//       <li className="text-white">
//         <img src="" alt="" />
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </li>
//   );
// };

// export default CoreConcepts;



import React from 'react'

const CoreConcepts = ({image, title, description}) => {
  return (
    <div className='text-white'>
      <li>
      <img src={image} alt="star" className='w-30'/>
      <h2 className='ml-16'>{title} </h2>
      <p className='ml-8'>{description}</p>
      </li>
    </div>
  )
}

export default CoreConcepts
