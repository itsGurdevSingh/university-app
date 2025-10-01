import React from 'react'
import logo from '../../assets/svgs/Logo.svg'
import SearchIcon from '../../assets/svgs/svg-image-1.svg'
import MenuIcon from '../../assets/svgs/svg-image-2.svg'

const Header = () => {
  return (
    <div className='h-18 w-full px-8 py-8 flex items-center justify-between bg-white'>
        {/* logo */}
        <div>
            <img src={logo} alt="logo" className='h-full w-full'/>
        </div>

        {/* nav items */}
        <div className='w-2/3 h-full flex items-center space-x-8 justify-end'>
            {/* navlinks */}
            <div>
                <ul className='hidden md:flex space-x-4 lg:space-x-8 text-gray-700 font-medium'>
                    <li className='cursor-pointer transition-all duration-500 ease-in-out hover:text-red-600'>About</li>
                    <li className='cursor-pointer transition-all duration-500 ease-in-out hover:text-red-600'>Event</li>
                    <li className='cursor-pointer transition-all duration-500 ease-in-out hover:text-red-600'>Research</li>
                    <li className='cursor-pointer transition-all duration-500 ease-in-out hover:text-red-600'>Contact Us</li>
                </ul>
            </div>

            {/*search buttons */}
            <div>
                <img src={SearchIcon} alt="search" className='h-full' />
            </div>

            {/* menu button */}
            <div className='bg-black p-1 rounded-md '>
                <img src={MenuIcon} alt="menu" className=' h-full' />
            </div>

        </div>
    </div>
  )
}

export default Header