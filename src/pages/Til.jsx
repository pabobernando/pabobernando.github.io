import React from 'react'
import Wait from '../img/wait.png'

function Til() {
  return (
    <div>
<div className="grid h-screen px-4 bg-gray-800 place-content-center">
  <div className="text-center">
<img src={Wait} />
    <h1
      className="mt-6 text-2xl font-bold tracking-tight text-gray-300 sm:text-4xl"
    >
      Coming Soon
    </h1>

  </div>
</div>
    </div>
  )
}

export default Til