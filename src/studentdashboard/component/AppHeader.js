import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { IoNotificationsOutline } from "react-icons/io5";
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
} from '@coreui/react'
import { IoSearchOutline } from "react-icons/io5";



const AppHeader = () => {
  const headerRef = useRef()


  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])

  return (
    <div className='grid grid-flow-row '>
      <div className='flex items-center justify-between h-[100px] gap-6 '>
      <div className='flex items-center gap-6 '
        onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}

      >
        <img
        className='w-[37px] h-[27px]'
          src={process.env.PUBLIC_URL + "/images/admin/hamberger.png"}
          alt="no img"
        />
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/admin/Logo.png"}
            alt="no img"
          />
        </div>
      </div>
      <div className='flex items-center gap-6'>
       
      <div className="relative">
  <input
    type="text"
    placeholder="Search"
    className="bg-gray-200 w-[150px]    rounded pl-9 pr-1 py-1 outline-none"
  />

 
  <div className='absolute  top-2 left-4'>
  <IoSearchOutline  />
  </div>
</div>

          <img
            src={process.env.PUBLIC_URL + "/images/admin/icon.png"}
            alt="no img"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/admin/share.png"}
            alt="no img"
          />
          <button className='bg-blue-500 flex items-center gap-2 px-2 py-1 rounded'><img
            src={process.env.PUBLIC_URL + "/images/admin/lmsvector.png"}
            alt="no img"
          /><span className='text-white '>LMS</span></button>
          <div className='flex flex-col items-center '>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300">
  <img
    src={process.env.PUBLIC_URL + "/images/admin/avatar.png"}
    alt="Avatar"
    className="w-full h-full object-contain rounded-full"
  />
</div>

          
           
            <span className='text-xs font-bold pt-1'>Rahul Sharma</span>
          <span className='text-xs'>Student</span>
          </div>
        
      </div>
      </div>
    </div>
  )
}

export default AppHeader