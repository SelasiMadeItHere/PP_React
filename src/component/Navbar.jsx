import React,{ useState } from 'react'
import MenuIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/CloseOutlined'

const Navbar = ()=> {
    const [nav,setNav] =useState(false)
    const handleClick = () =>setNav(!nav)


  return (
    <div className=' w-screen h-[80px] z-10 drop-shadow-lg bg-zinc-200'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BBrand</h1>
                <ul className='hidden = md:flex ml-7'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                    <li>Pricing</li>
                </ul>
            </div>

            <div className='hidden md:flex pr-12'>
                <button className='bg-transparent text-black mx-2 border-none'>Sign In</button>
                <button className='mx-2'>Sign Up</button>
            </div>

            <div className='md:hidden' onClick={handleClick}>
                {!nav ? <MenuIcon sx={{ fontSize: 40 }}/> : <CloseIcon sx={{fontSize:40}} />}
                
            </div>
        </div>
        

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 px-8 w-full md:hidden'}>
            <li className='border-b-2 border-zinc-300 w-full'>Home</li>
            <li className='border-b-2 border-zinc-300 w-full'>About</li>
            <li className='border-b-2 border-zinc-300 w-full'>Support</li>
            <li className='border-b-2 border-zinc-300 w-full'>Platform</li>
            <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
        </ul>
    </div>
  )
}

export default Navbar