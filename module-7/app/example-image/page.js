import Image from 'next/image'
import React from 'react'

const ExampleImage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <Image
        src={"/vercel.svg"}
        alt={"Vercel Logo"}
        width={100}
        height={100}
        
        />
    </div>
  )
}

export default ExampleImage