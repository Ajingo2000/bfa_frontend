import { useState } from 'react';
import headerLogo from '../assets/images/bfa-logo-80x80.png';
import hamburger from '../assets/images/hamburger.png';
import Donate_Btn from '../constants/button';
import NavLinks from '../constants/navLinks';

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <header>
    <nav className='bg-gradient-to-r from-blue-200 to-teal-200 '>
        <div className="flex items-center font-medium justify-around shadow-lg shadow-blue-600/50">
            <div className="z-50 p-5 md:w-auto w-full flex justify-between ">
                <img src={headerLogo} alt="BFA Logo" className="md:cursor-pointer h-9"/>
                <p className="pl-4 font-mon font-extrabold text-[20px]">Baptists for Africa</p>
                <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>
                <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
                </div>
            </div>
            <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
               <NavLinks/>

            </ul>
            <div className='md:block hidden'>
              <Donate_Btn/>
            </div>
            {/* Mobile Nav */}
            <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-24 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
              <li  className='py-7 px-3 inline-block'>
                <NavLinks/>
              </li>
                
              <div className="py-5 text-left">
                <Donate_Btn/>
              </div>
            </ul>
        </div>
    </nav>
    </header>
  )
}

export default NavBar;
