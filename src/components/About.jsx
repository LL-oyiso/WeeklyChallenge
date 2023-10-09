import React from 'react'


const About = () => {
  return (

    <>
    <div id ="about" className='max-w-[1140px] h-[880px] m-auto w-full p-4 py-16'>
      <h1 className='text-left  font-bold text-4xl  text-gray-800 mb-10'>Reimaging public commute</h1>
     
      <div className='grid md:grid-cols-2 h-[850px]   '>
      <h1 className=' grid-cols-2text-2xl'>Making public commute a hassle free, easily acceessbile experience.
      <ol>
     <li><h1 className='font-bold'>Passion for Change</h1> Port is dedicated to transforming the way people commute and travel in cities, recognizing the challenges of public transportation.</li>
     <li><h1 className='font-bold'>Empowering Commuters</h1> Our mission is to empower individuals by providing tools that give them control over their daily commutes.</li>
     <li><h1 className='font-bold'>Reducing Stress</h1> We aim to alleviate the stress and uncertainty of public transportation by offering real-time updates and innovative technology.</li>
     <li><h1 className='font-bold'>Efficiency and Convenience</h1> Port strives to make commuting more efficient and convenient for everyone, making planning routes and journeys a seamless experience.</li>
     <li><h1 className='font-bold'>Innovation for All</h1> We are committed to utilizing cutting-edge technology to improve the commuting experience, making it enjoyable for all.</li>
      </ol></h1>
    
     
      
       <div className='grid grid-cols-2'>
        
        <img src ="https://images.unsplash.com/photo-1597271479771-757112f11d9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80" alt="" className='w-full md:h-full  p-2 max-h-[420px] h-[250px] rounded-full  '/>
        <img src ="https://images.unsplash.com/photo-1607424064879-708250e57647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" alt =" " className='w-full md:h-full  p-2 max-h-[500px] h-[300px] rounded-full' />

      
    
       </div>
         
       
       </div>

     
      

    </div>

    <div id="features" className='grid md:grid-cols-2 h-[480px] bg-gray-100 m-auto w-full '>
      <div >
        <img src ="https://transitapp.com/img/5.0/home/go.gif" alt =""  className=' mt-20  w-full md:h-full  p-2 max-h-[135px] h-[250px] object-contain'/>
       </div>

      

       <div className='max-w-[1140px] md:grid-cols-2  m-10 h-[300px] w-full'>
       <h1 className=' mt-10 grid-cols-2 text-4xl font-bold text-gray-800'>Real time updates:</h1> <p className='mt-5'> Effortlessly craft your perfect itinerary with GO's comprehensive trip planning service.<br></br> Discover the most optimal routes and transportation modes thoughtfully organized for <br></br>your convenience. Stay on top of your travel game with the latest real-time data<br></br></p>
       </div>
</div>
      <div>
       <div class =' max-w-[1140px] grid md:grid-cols-2 h-[490px] m-auto w-full'>
       <div className='ml-10'>
       <h1 className=' mt-10  grid-cols-2 text-4xl font-bold text-gray-800'>Plan your trip effortlessly</h1><p className='mt-5'>With the aid of Ports live routes feature, explore your frequently traveled routes presented in an intuitive layout that's designed to enhance your travel experience. Plus, you'll benefit from real-time data integration, ensuring the highest level of accuracy and convenience throughout your journey.</p>
       </div>

        <div>
        <img src ="https://transitapp.com/img/5.0/home/trip-plan.gif"  alt ='' className='mt-5  w-full md:h-full  p-2 max-h-[250px] h-[250px] object-contain'  />
        </div>
       
       </div>
      </div>
    </>
  )
}

export default About
