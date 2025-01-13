import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import classNames from 'classnames'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { FaAddressCard, FaRegChartBar } from 'react-icons/fa'
import { HiTemplate } from 'react-icons/hi'
import { MdManageAccounts } from 'react-icons/md'
import { RiListSettingsFill } from 'react-icons/ri'

const NavLinks = [
    {link:'/reports', label:'Manage Reports', icon:<FaRegChartBar />},
    {link:'/users', label:'Manage Users', icon:<MdManageAccounts />},
    {link:'/roles', label:'Manage Roles', icon:<FaAddressCard />},
    {link:'/Departments', label:'Manage Departments', icon:<HiTemplate />},
]
const Settings = () => {
  return (
    <Menu as="div" className="relative inline-block ">
      <div>
        <MenuButton className="text-negative-color items-center inline-flex w-full justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-semibold transition  ">
            <RiListSettingsFill className='text-[20px]' />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* <div className="py-1">
                <MenuItem>
                  {({ active }) => (
                    <Link
                      href={`/auth/profile/${user.id}`}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Profile
                    </Link>
                  )}
                </MenuItem> 
              </div>*/}

          <div className="py-1">
            {
                NavLinks.map(item=>(
                    <MenuItem>
                    {({ active }) => (
                        <Link
                            href={item.link}
                            className={classNames(
                                active ? "bg-gray-100 text-color" : "text-color",
                                "px-4 py-2 text-sm cursor-pointer w-full text-start flex items-center gap-2"
                            )}
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    )}
                    </MenuItem>
                ))
            }
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}

export default Settings
