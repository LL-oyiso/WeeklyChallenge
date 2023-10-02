import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[110vh]'>
      <img src ="https://images.unsplash.com/photo-1588144291431-d658aab8dc41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80" alt =""  className='   w-full h-full object-cover'/>
     
      <div className='max-w-[1140px] m-auto '>
      <div className='absolute top-[35%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='font-bold text-5xl'>Go whereever, however</h1>
          <h2 className='font-bold text-4xl py-4 '>With Port</h2>
          <button className='mt-4 rounded-full w-40 font-medium gradient-button'>Get the app</button>
          <p className='mt-6 font-bold'>
          Leave behind the stress of daily commuting and embark on a seamless adventure of sheer delight with our revolutionary transportation solutions. Experience the future of travel, where convenience and joy intertwine seamlessly to make your daily journeys not just hassle-free but truly unforgettable
          </p>
        </div>

      </div>
    </div>
  )
}

export default Hero
