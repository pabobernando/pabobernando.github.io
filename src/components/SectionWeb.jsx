import React from 'react'
import Js from '../img/js.png'
import Sol from '../img/solidity.png'
import { Link } from 'react-router-dom'

function SectionWeb() {
  return (
    <div>
        <section>
  <div className="max-w-screen-2xl bg-gray-800 mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div
      className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
    >
      <div
        className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
      >
        <h2 className="font-bold sm:text-4xl text-cyan-500">WEB DEVELOPER</h2>

        <p className="my-4 text-gray-300 text-2xl">
        I would be happy if you could take the time to review my portfolio as a web developer. I believe that I have the skills and experience you are looking for.
        </p>
<Link to="https://github.com/pabobernando"><a className="px-4 py-2 mr-4 text-white uppercase bg-cyan-500 border-2 border-transparent rounded-lg text-md hover:bg-cyan-400">
              My Porto
            </a></Link>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          className="block rounded-xl border border-cyan-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
        >
          <span className="inline-block rounded-lg p-3">
            <img src={Js} />
          </span>
          <h2 className="mt-2 font-bold text-gray-300">TicTacToe Game</h2>
          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
            - Javascript
          </p>
        </a>

        <a
          className="block rounded-xl border border-cyan-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

        >
          <span className="inline-block rounded-lg p-3">
            <img src={Js} />
          </span>
          <h2 className="mt-2 font-bold text-gray-300">Dashboard Interchain</h2>
          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
            - Javascript
          </p>
        </a>

        <a
          className="block rounded-xl border border-cyan-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          
        >
          <span className="inline-block rounded-lg p-3">
            <img src={Js} />
          </span>
          <h2 className="mt-2 font-bold text-gray-300">QR Scanner</h2>
          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
            - Javascript
          </p>
        </a>

        <a
          className="block rounded-xl border border-cyan-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
        >
          <span className="inline-block rounded-lg p-3">
            <img src={Sol} />
          </span>
          <h2 className="mt-2 font-bold text-gray-300">Build Contract Coin</h2>
          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
            - Solidity
          </p>
        </a>

        <a
          className="block rounded-xl border border-cyan-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
        >
          <span className="inline-block rounded-lg p-3">
            <img src={Sol} />
          </span>
          <h2 className="mt-2 font-bold text-gray-300">Build Contract discuss</h2>
          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
            - Solidity
          </p>
        </a>

        <a
          className="block rounded-xl border border-cyan-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
        >
         <span className="inline-block rounded-lg p-3">
            <img src={Js} />
          </span>
          <h2 className="mt-2 font-bold text-gray-300">Input to Excel</h2>
          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
            - Javascript
          </p>
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default SectionWeb