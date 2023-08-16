import React from 'react'
import Linken from '../img/linken.png'

function CtaLinken() {
  return (
    <div>
<div className="relative z-20 flex items-center bg-gray-800 h-screen ">
    <div className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto border border-cyan-500">
    <div className="relative block w-full mx-auto mt-6 md:mt-0">
            <img src={Linken} className="max-w-xs m-auto md:max-w-2xl"/>
        </div>
        <div className="flex flex-col">
            <h1 className="w-full text-4xl font-light text-center text-gray-300 uppercase sm:text-5xl dark:text-white">
            MELANGKAH MAJU ERA REVOLUSI DIGITAL
            </h1>
            <h2 className="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center text-gray-500 dark:text-white">
            keamanan dan privasi telah menjadi aspek krusial dalam menjaga integritas. Mulai belajar technology Blockchain dari berbagai level yang disesuaikan dengan kebutuhan kamu!
            </h2>
            <div className="flex items-center justify-center mt-4">
                <a href="https://linkenblock.netlify.app/" className="px-4 py-2 mr-4 text-white uppercase bg-cyan-500 border-2 rounded-lg border-transparent text-md hover:bg-cyan-700">
                    Go to app
                </a>
                <a href="https://medium.com/@pabobernando69/help-user-to-learn-blockchain-technology-indonesia-1dbf5cd4ef5c" className="rounded-lg px-4 py-2 text-cyan-500 uppercase bg-transparent border-2 border-cyan-500 hover:bg-gray-800 hover:text-white text-md">
                    Documentation
                </a>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default CtaLinken