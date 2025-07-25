import React, { useEffect, useState } from 'react'
import logo from '../assets/logo1.jpeg'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Menu, XIcon } from 'lucide-react'
import { useAppContext } from '../context/AppContext';
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [focus, setFocused] = useState(false)
  const [filter, setFilter] = useState('')

  const { details } = useAppContext()
  const navigate = useNavigate()
  return (
    <div>
      <div className='flex flex-col md:flex-row  justify-between md:items-center gap-4 py-4 '>
        <div className='flex items-center max-md:pr-1 justify-between md:block'>
          <img className='w-28 md:w-32 rounded-lg' src={logo} alt="" />
          {isOpen ? <XIcon className='md:hidden fixed right-5 scale-130 text-black/80 z-20' onClick={() => setIsOpen(false)} /> : <Menu onClick={() => setIsOpen(true)} className='md:hidden scale-130 text-black/80' />}
        </div>
        <div
          className={`md:hidden fixed z-10 inset-0 bg-gray-300 flex items-center justify-center transition-all duration-300 ease-out overflow-hidden ${isOpen ? 'h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
          <img className='w-28 md:w-32 rounded-lg absolute top-4 left-4' src={logo} alt="" />
          <ul className='mt-2 flex flex-col text-center text-lg'>
            <NavLink onClick={() => setIsOpen(false)} to='/' className={({ isActive }) => `py-2 ${isActive ? 'bg-black/80 text-gray-300 px-2 rounded-lg' : ''}`}>
              HOME
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} to='/atom' className={({ isActive }) => `py-2 px-2 ${isActive ? 'bg-black/80 px-2 text-gray-300 rounded-lg' : 'border-0'}`}>
              ATOM
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} to='/contact' className={({ isActive }) => `py-2 ${isActive ? 'bg-black/80 px-2 text-gray-300 rounded-lg' : 'border-0'}`}>
              CONTACT
            </NavLink>
          </ul>
        </div>
        <div className='md:flex gap-6 text-lg font-medium hidden'>
          <NavLink to='/' className={({ isActive }) => ` ${isActive ? 'border-b-2 border-b-black/80' : 'border-0'}`}>
            HOME
          </NavLink>
          <NavLink to='/atom' className={({ isActive }) => `${isActive ? 'border-b-2 border-b-black/80' : 'border-0'}`}>
            ATOM
          </NavLink>
          <NavLink to='/contact' className={({ isActive }) => `${isActive ? 'border-b-2 border-b-black/80' : 'border-0'}`}>
            CONTACT
          </NavLink>
        </div>
        <div onClick={()=>{setFocused(!focus);setFilter('');}}>
          <div className='relative z-40'>
            {
              focus ? <div className=' fixed inset-0 bg-black/90'>
                <div className='grid grid-cols-2 px-2 md:flex flex-wrap gap-2 items-center scrollbar-hidden justify-center overflow-y-scroll pt-24 h-full'>
                  {details.filter((item) => {
                    return filter.toLowerCase() === '' ? item : item.name.toLowerCase().includes(filter.toLowerCase())
                  }).slice(0, 20).map((item) => (
                    <div>
                      <img onClick={() =>{ navigate(`/singlebook/${item.id} `); setFocused(false); setFilter('');} }  className='w-64 h-64 border-2 border-[#035DCA] rounded-lg' src={item.image} alt="" />
                    </div>
                  ))}
                </div>
              </div> : ""
            }
            <div onClick={() => setFocused(true)} className={`${isOpen ? 'hidden' : ''} z-50 w-full sticky top-0 transition-transform duration-300`}>
              <input
                type="text"
                value={filter}
                placeholder="Search Events..."
                onChange={e => setFilter(e.target.value)}
                className={`${focus ? "max-md:translate-y-[-100%] md:left-1/2 md:w-1/2 md:fixed bg-white/70 md:translate-x-[-50%]  " : ""} px-3 py-1 md:px-4 md:py-2  rounded-full border-[1.75px] focus:border-black/70 focus:outline-none  placeholder:text-black/50  focus:text-black/50 transform transition-all duration-300  md:focus:text-lg  w-full`}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className='hidden md:block text-black/20 h-[8px]' />
    </div>

  )
}

export default Navbar