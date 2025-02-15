import Breadcrumb from '@/Components/Common/Breadcrumb'
import SmallCardsList from '@/Components/Lists/SmallCardsList'
import React from 'react'
import { FaBuilding, FaUserShield } from 'react-icons/fa'
import { FaUsersGear } from 'react-icons/fa6'
import { FcAddDatabase } from 'react-icons/fc'
import { ImHome3 } from 'react-icons/im'

const cardsList = [
  {label:'Users', href:'users', color:'text-blue-600', icon:<FaUsersGear />, description:'Add, edit, delete activate/deactivate users, and change users role.'},
  {label:'Roles', href:'roles', color:'text-red-600', icon:<FaUserShield />, description:'Manage Roles, and Assign/Remove permissions from role.'},
  {label:'Departments', href:'departments', color:'text-green-600', icon:<FaBuilding />, description:'Add, edit, delete activate/deactivate users, and change users role.'},
  // {label:'Reports', href:'reports', color:'text-red-600', icon:<GiNotebook /> , description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque provident sapiente saepe in natus iste. Temporibus esse, aperiam quibusdam cum asperiores aut exercitationem provident, doloremque quis, omnis necessitatibus molestias.'},
  {label:'Connection', href:'/connections', color:'text-primary', icon:<FcAddDatabase /> , description:'Manage Connection of databases [add, edit, delete, check connection]'},
]
const BreadcrumbData = [
  {
    title:'Home', 
    icon: <ImHome3 />, 
    href:'/'
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
