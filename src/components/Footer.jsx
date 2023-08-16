import React from 'react'

function Footer() {
  return (
    <div>
<footer className="bg-gray-800 w-full py-8 pt-4">
    <div className="max-w-screen-xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-between text-lg font-light">
            <li className="my-2">
                <a className="text-gray-400  hover:text-white transition-colors duration-200" href="https://www.instagram.com/pabobernando/">
                    Instagram
                </a>
            </li>
            <li className="my-2">
                <a className="text-gray-400  hover:text-white transition-colors duration-200" href="https://twitter.com/pabo_bernando">
                    Twitter
                </a>
            </li>
            <li className="my-2">
                <a className="text-gray-400  hover:text-white transition-colors duration-200" href="https://github.com/pabobernando">
                    Github
                </a>
            </li>
            <li className="my-2">
                <a className="text-gray-400  hover:text-white transition-colors duration-200" href="https://www.linkedin.com/in/pabo-bernando-14a162215/">
                    LinkedIn
                </a>
            </li>
        </ul>
    </div>
</footer>
    </div>
  )
}

export default Footer