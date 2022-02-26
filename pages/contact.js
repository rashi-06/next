/* eslint-disable react/jsx-key */
import React from 'react'

const contact = () => {
  return (
    <div className="h-screen w-screen p-10 dark:bg-black dark:text-white text-black bg-white">
      <div className='flex flex-col flex-wrap justify-center items-center'>
        <h1 className='md:text-4xl text-center font-bold'>
          Interested? Let&apos;s Connect!
        </h1>
        <div className='border-2 p-4 m-5 rounded-md'>
          <div className='mt-3'>
            <span className="uppercase text-sm text-gray-600 font-bold ">Full Name</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="Rahul Kumar" />
          </div> 

          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder='rahul@gmail.com'/>
          </div>

          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>

          <div className="mt-8">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
     
          <div className="text-gray-700 mx-5 mt-8">
            Hate forms? Send us an <span className="underline cursor-pointer"><a rel='noreferrer' target="_blank" href="mailto:EmailAddress@.XYZ.com">email</a></span> instead.
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default contact