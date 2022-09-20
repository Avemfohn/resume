import React,{useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {BrowserRouter} from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';
import mlogo from "./Mlogo.svg"
const Header = () => {
    const[nav,setNav]=useState(false);

    const handleNav = () => (
      setNav(!nav)
    );

  return (
    <BrowserRouter>  
      <div class=" dark:bg-gray-800 dark:border-gray-700 bg-gray-50 rounded-b-xl border-8 flex flex-wrap justify-between items-center h-32 mx-auto px-4 z-10" id="header">
          {/* <h1 class='w-full text-3md font-bold text-[#df5d00] text-xl flex'>ERC</h1> */}
          <a href="#" class="flex items-center">
        <img src={mlogo} class="mr-3 h-auto md:h-auto" alt="Mert Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-mono">Mertcan Ercan</span>
          </a>
          <ul class="hidden md:flex">
            <Link smooth to="#projects" class=" font-bold text-white hover:text-[#3c9fc2] font-mono"><li class="p-4">Projects</li></Link>
            <Link smooth to="#appAbout" class="font-bold text-white hover:text-[#3c9fc2] font-mono"><li class="p-4">About</li></Link>
            <Link smooth to="#contact" class="font-bold text-white hover:text-[#3c9fc2] font-mono"><li class="p-4">Contact</li></Link>
          </ul>
          <div onClick={handleNav} class="block md:hidden">
            {nav ? "" : <AiOutlineMenu size={25} color="white"/>}
          </div>
          <div class={nav ? "fixed left-0 top-0 w-[100%] h-full border-r border-red-400 bg-gray-800 bg-opacity-90 md:hidden ease-in-out duration-500 z-10":'fixed left-[-100%]' }>
          <div onClick={handleNav} >
            <div class="fixed right-8 top-14" >
            {nav ? <AiOutlineClose size={30} color="white"/> : ""}
            </div>
          </div>
          <div onClick={handleNav} class="block md:hidden">
            <ul class="p-40 uppercase text-center">
            {/* <Link smooth to="#header" class="font-bold text-white hover:text-[#3c9fc2] font-mono"><li class="p-4">Home</li></Link> */}
            <Link smooth to="#projects" class="font-bold text-white hover:text-[#3c9fc2] font-mono"><li class="p-4">Projects</li></Link>
            <Link smooth to="#education" class="font-bold text-white hover:text-[#3c9fc2] font-mono"><li class="p-4">About</li></Link>
            <Link smooth to="#contact" class="font-bold text-white hover:text-[#3c9fc2] font-mono"><li class="p-4">Contact</li></Link>
            </ul>
          </div>  
          </div>
      </div>
    </BrowserRouter>  
    );
  }

export default Header