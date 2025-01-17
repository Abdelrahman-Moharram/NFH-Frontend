import Breadcrumb from '@/Components/Common/Breadcrumb'
import SmallCardsList from '@/Components/Lists/SmallCardsList'
import React from 'react'
import { FaUsersGear, FaUserShield } from 'react-icons/fa6'
import { GiNotebook } from 'react-icons/gi'

const cardsList = [
    {label:'Users', href:'users', color:'text-blue-600', icon:<FaUsersGear />, description:'You can add, edit, delete activate/deactivate users, and change users role.'},
    {label:'Roles', href:'roles', color:'text-green-600', icon:<FaUserShield />, description:'Manage Roles, and Assign/Remove permissions from role.'},
    {label:'Reports', href:'reports', color:'text-red-600', icon:<GiNotebook /> , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque provident sapiente saepe in natus iste. Temporibus esse, aperiam quibusdam cum asperiores aut exercitationem provident, doloremque quis, omnis necessitatibus molestias.'},
    {label:'Users', href:'users', color:'text-primary', icon:<FaUserShield /> , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque provident sapiente saepe in natus iste. Temporibus esse, aperiam quibusdam cum asperiores aut exercitationem provident, doloremque quis, omnis necessitatibus molestias.'},
]
const BreadcrumbData = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/settings',
    title: 'Settings',
    current:true
  }
]
const page = () => {

  return (
    <div className="px-4">
      <div className="my-8 flex justify-between items-center">
        <Breadcrumb
          items={BreadcrumbData}
        />
      </div>
      <SmallCardsList 
        SkeletonNum={9}
        items={cardsList}
        preLink='settings'
        skeletonHeight='400px'
        skeletonWidth='400px'
      />
      
    </div>
  )
}

export default page
