'use client'
import React from 'react'
import UserNavDropDown from './UserNavDropDown';
import { useAppSelector } from '@/redux/hooks';

import Cookies from "js-cookie"

const NavBar = () => {
    const { user } = useAppSelector(state => state.auth);
    
    const NavLinks = [
        {link:'/reports', label:'Reports'},
        {link:'/users', label:'Users'},
        {link:'/roles', label:'Roles'},
        {link:'/Departments', label:'Departments'},
    ]

  return (
<>
    
    <header className="w-full z-[3] ">
        <div className="flex items-center gap-8 py-2">
            <div className="flex flex-1 px-12 items-center justify-end md:justify-between">
                
                <div className=""></div>
                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        <div className="sm:flex sm:gap-4">
                        {
                            Cookies.get('access_token') ?
                                <>
                                    <UserNavDropDown user={user} />
                                </>
                            :
                                null
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</>
  )
}

export default NavBar
