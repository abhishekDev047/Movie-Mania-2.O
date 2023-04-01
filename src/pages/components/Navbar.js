import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex flex-row  h-fit w-full top-0 left-0  bg-blue-950 text-yellow-500 fixed'>
        <div className='text-lg px-2 py-1 hover:text-yellow-300 hover:bg-blue-700'> <Link className='' href={'/'}> Movie-Mania 2.O</Link></div>
        <div className=' px-2 pt-2 text-sm hover:text-yellow-300'> <Link className='hover:bg-blue-700 hover:rounded-lg hover:px-2' href={'/components/Watchlist'}> Watchlist</Link></div>
        <div className=' px-2 pt-2 text-sm hover:text-yellow-300'> <Link className='hover:bg-blue-700 hover:rounded-lg hover:px-2' href={'/components/About'}> About Us</Link></div>
    </div>
  )
}

export default Navbar;