import React from 'react'

const About = () => {
  return (
    <div id ="about" className='max-w-[1140px] h-[1140px] m-auto w-full p-4 py-16 '>
      <h1 className='text-left  font-bold text-4xl  text-gray-800 mb-10'>Reimaging public commute</h1>
     
      <div className='grid md:grid-cols-2  '>
      <h1 className=' text-2xl'>Making public commute a hassle free, easily acceessbile experience. <li>Sharing routes</li>
     <li>Making moving though the city a breeze</li><li>Providing live updates to arrival and departures times.</li><li>Providing a view of routes and instant price comparisons</li><li>Day pass, weekly and monthly card/text purchases completely online</li></h1>
      
       <div className='grid grid-cols-2 h-[900px] '>
        
        <img src ="https://images.unsplash.com/photo-1597271479771-757112f11d9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80" alt="" className='w-full md:h-full  p-2 max-h-[420px] h-[300px] rounded-full  '/>
        <img src ="https://images.unsplash.com/photo-1607424064879-708250e57647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" alt =" " className='w-full md:h-full  p-2 max-h-[500px] h-[400px] rounded-full' />
       </div>
      </div>
     
    </div>
  )
}

export default About
