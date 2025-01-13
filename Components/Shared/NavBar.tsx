'use client'
import React from 'react'
import UserNavDropDown from './UserNavDropDown';
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import Settings from './Settings';

const NavBar = () => {
    const { isAuthenticated, user, isLoading } = useAppSelector(state => state.auth);
    
    const NavLinks = [
        {link:'/reports', label:'Reports'},
        {link:'/users', label:'Users'},
        {link:'/roles', label:'Roles'},
        {link:'/Departments', label:'Departments'},
    ]

  return (
<>
    
    <header className="w-full z-[3] ">
        <div className="flex items-center gap-8 py-2 bg-secondary">
            <div className="flex flex-1 px-12 items-center justify-end md:justify-between">
                <nav aria-label="Global" className="md:block">
                    <ul className="flex items-center gap-6 text-sm">
                        {
                            NavLinks.map(item=>(
                                <li key={item?.link}>
                                    <Link className="text-negative-color transition hover:text-color" href={item.link}> {item.label} </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        <div className="sm:flex sm:gap-4">
                        {
                            isAuthenticated ?
                                <>
                                    <Settings />
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
