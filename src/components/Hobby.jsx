import React from 'react'
import Chess from '../img/chess2.png'
import Gamepad from '../img/gamepad.png'
import Code from '../img/code.png'

function Hobby() {
  return (
    <div>
        <h1 className='text-center font-bold text-3xl text-gray-300 bg-gray-800'>- Hobby -</h1>
<div className="flex-wrap items-center justify-center gap-8 text-center sm:flex bg-gray-800">
    <div className="w-full px-4 py-4 mt-6  rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 bg-gray-800 border border-cyan-500">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center mx-auto text-white rounded-md">
                <img src={Chess} className="w-1/3" />
            </div>
        </div>
        <h3 className="py-4 text-2xl font-semibold text-gray-300 sm:text-xl dark:text-white">
            Chess
        </h3>
    </div>
    <div className="w-full px-4 py-4 mt-6 bg-cyan-500 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center mx-auto text-white  rounded-md">
            <img src={Code} className="w-1/3" />
            </div>
        </div>
        <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Code
        </h3>
    </div>
    <div className="w-full px-4 py-4 mt-6 border border-cyan-500 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 bg-gray-800">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center mx-auto text-white  rounded-md">
            <img src={Gamepad} className="w-1/3" />
            </div>
        </div>
        <h3 className="py-4 text-2xl font-semibold text-gray-300 sm:text-xl ">
            Game
        </h3>
    </div>
</div>

    </div>
  )
}

export default Hobby