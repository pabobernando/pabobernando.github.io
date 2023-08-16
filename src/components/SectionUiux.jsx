import React from 'react'
import Ux from '../img/ux.png'
import Soon from '../img/soon.png'
import { Link } from 'react-router-dom'

function SectionUiux() {
  return (
    <div>
        <section>
  <div class="max-w-screen-2xl bg-gray-800 mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div
      class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
    >
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          class="block rounded-xl border border-cyan-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg p-3">
            <img src={Ux} />
          </span>
          <h2 class="mt-2 font-bold text-gray-300">Linken</h2>
          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
            Research and Design
          </p>
        </a>

        <a
          class="block rounded-xl border border-cyan-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg p-3">
            <img src={Ux} />
          </span>
          <h2 class="mt-2 font-bold text-gray-300">Riliv</h2>
          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
            Add fitur counseling offline
          </p>
        </a>

        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
         <span class="inline-block rounded-lg p-3">
            <img src={Soon} />
          </span>
          <h2 class="mt-2 font-bold text-gray-300"></h2>
          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
            
          </p>
        </a>

        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg p-3">
            <img src={Soon} />
          </span>
          <h2 class="mt-2 font-bold text-gray-500"></h2>
          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-700">
            
          </p>
        </a>

        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg p-3">
            <img src={Soon} />
          </span>
          <h2 class="mt-2 font-bold text-gray-500"></h2>
          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-700">
            
          </p>
        </a>
        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg p-3">
            <img src={Soon} />
          </span>
          <h2 class="mt-2 font-bold text-gray-500"></h2>
          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-700">
            
          </p>
        </a>
      </div>
      <div
        class="mx-auto max-w-lg text-center lg:mx-auto"
      >
        <h2 class="text-3xl font-bold sm:text-4xl text-cyan-500">UI / UX </h2>

        <p class="my-4 text-2xl text-gray-300">
        I would like to know your opinion about my portfolio as a UI/UX designer. Do you have any feedback for me?
        </p>
        <Link to="https://medium.com/@pabobernando69"><a className="px-4 py-2 mr-4 text-white uppercase bg-cyan-500 border-2 border-transparent rounded-lg text-md hover:bg-cyan-400">
              My Porto
            </a></Link>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default SectionUiux