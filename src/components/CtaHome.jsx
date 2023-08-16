import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../img/avatarbg.png'

function CtaHome() {

    const recipientEmail = 'pabojust@gmail.com';
    const subject = 'Pesan dari Website';
    const body = 'Halo,\n\nIni adalah pesan dari website kami.';
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div>
        <main className="relative overflow-hidden">
    <div className="relative z-20 flex items-center overflow-hidden bg-gray-800">
      <div className="container relative flex flex-col-reverse px-6 py-16 mx-auto sm:flex-row">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <h1 className="flex flex-col text-6xl font-black leading-none text-gray-300 uppercase font-bebas-neue sm:text-8xl">
            Hi !
            <span className="text-5xl sm:text-7xl text-gray-300">
              My Name is <span className='text-cyan-400'>Pabo</span> Bernando
            </span>
          </h1>
          <p className="text-sm text-gray-500 sm:text-base dark:text-white">
          The second of two children . I was born in Yogyakarta, 19 May 1996. Currently, I live in Wates , Kulon Progo , Yogyakarta. btw Chess is one of my hobbies. I can play Chess since 4th grade
          </p>
          <div className="flex mt-8">
            <Link to="/product"><a className="px-4 py-2 mr-4 text-white uppercase bg-cyan-500 border-2 border-transparent rounded-lg text-md hover:bg-cyan-400">
              My Product
            </a></Link>
            <Link to={mailtoLink}><a className="px-4 py-2 text-cyan-500 uppercase bg-transparent border-2 border-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white text-md">
              Contact
            </a></Link>
          </div>
        </div>
        <div className="relative w-full sm:w-1/3 lg:w-3/5">
          <img src={Avatar} className="m-auto max-w-sm sm:max-w-full animate-bounce"/>
        </div>
      </div>
    </div>
  </main>
  </div>
  )
}

export default CtaHome