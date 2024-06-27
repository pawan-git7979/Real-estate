import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 inset-x-0 bottom-0">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <span>NITT</span>. All Rights Reserved.
    </span>
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made by 
    <Link to='https://www.linkedin.com/in/pawan-agrawal-316a16190/'>
        <span class="text-blue-500 hover:underline"> Pawan Agrawal
         </span>
    </Link>
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/about" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/pawan-agrawal-316a16190/" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
  )
}
