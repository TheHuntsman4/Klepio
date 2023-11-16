import React from 'react'

const buttonWithImage = ({title,image}) => {
  return (
    <button className='w-full h-full flex flex-col justify-center items-center text-2xl font-poppins font-semibold bg-white'>
      <img src={image} width={100} alt={title}/>
      <p>{title}</p>
    </button>
  )
}

export default buttonWithImage
