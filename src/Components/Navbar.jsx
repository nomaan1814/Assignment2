import React from 'react'

const Navbar = () => {
  return (
    <div>
    <header class="text-white body-font bg-black">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-bold items-center text-white mb-4 md:mb-0">
      <span class="ml-3 text-xl">Github Search</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-white">First Link</a>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Navbar
