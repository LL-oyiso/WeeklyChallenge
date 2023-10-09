import React from 'react'
import footer from '../footer_eg.jpg'
const Footer = () => {
  return (
    <>
    <div id="contact" className=' flex  w-full  m-auto border-t-4'>
      <img src ={footer} alt ='' className=' w-full   h-[450px] object-cover ' />
      <div className='absolute w-full md:-[60%] max-w-[11000px] justify-between flex  text-white p-4 '>
        
      <ul className='text-white text-2xl p-6'>
        <h2>Port</h2>
        <h1>Visit help center</h1>
        <a href ="#about"><li>About us</li></a>
       <a href ="#features"><li>Features</li></a> 
        <li>Routes</li>
        <li>Safety</li>
      </ul> 

      <ul className='text-white text-2xl p-6'>
        <h2>Partners</h2>
       
        <a href ="#about"><li>About us</li></a>
        <li>Services</li>
        {/* <li>Routes</li>
        <li>Safety</li> */}
      </ul>

      
        </div>

        
      <div>
      {/*  */}
      </div>
      
    
    {/* <div className=''>
    <ul className='text-white p-6'>
        <h2>Partners</h2>
        <h1>Visit help center</h1>
        <li>About us</li>
        <li>Services</li>
        <li>Routes</li>
        <li>Safety</li>
      </ul>
    </div> */}
    </div>
   
    </>
    
  )
}

export default Footer
