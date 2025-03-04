'use client'
import Breadcrumb from '@/Components/Common/Breadcrumb'
import DataTable from '@/Components/Tables/DataTable'
import { to_int_or_default } from '@/Components/utils/helper'
import { useGetUsersListQuery } from '@/redux/api/accountsApi'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import UserFormOverLay from './_Components/AddUserOverLay'
import Paginition from '@/Components/Lists/Paginition'
import { BiEdit } from 'react-icons/bi'
import { ImHome3 } from 'react-icons/im'
import { EditIcon } from '@/Components/Shared/SharedIcons'


const BreadcrumbData = [
  {
        title:'Home', 
        icon: <ImHome3 />, 
        href:'/'
},
  {
    href: '/settings',
    title: 'Settings',
    current:false
  },
  {
    href: '/settings/users',
    title: 'Users',
    current:true
  }
]

const page = () => {

  

  const [showOverLay, setShowOverLay] = useState(false)
  const [userId, setUserId] = useState('')
  const searchParams = useSearchParams()

  
  let size = to_int_or_default(searchParams.get("size")) 
  let page = to_int_or_default(searchParams.get("page")) 
  
  

  const handleOverLay = () =>{
    if(userId)
      setUserId('')
    setShowOverLay(!showOverLay)
  }
  const {data, isLoading} = useGetUsersListQuery({page, size})

  const options = (row:any)=>(
    <div className='flex gap-4 items-start'>
      <button onClick={()=>{handleOverLay();setUserId(row?.id)}} className='text-lg transition-all rounded-full' ><EditIcon />
      </button>
    </div>
  )

  return (
    <>
      <UserFormOverLay
        handleOpen={handleOverLay}
        open={showOverLay}
        userId={userId}
      />
      <div className='px-4'>
        
        <div className="my-8 flex justify-between items-center">
          <Breadcrumb
            items={BreadcrumbData}
          />
          <button 
              onClick={handleOverLay}
              className="px-8 bg-primary text-negative-color hover:bg-primary/90 transition-all h-fit p-2 rounded-md text-negitaive-color flex items-center gap-3"
            >
              <FaPlusCircle /> 
              add user 
          </button>
        </div>

        <DataTable
          data={data?.users}
          isLoading={isLoading}
          fnKeys={['id']}
          emptyLinkHref='/settings/users'
          emptyText='صفحة إعدادات المستخدمين'
          isOptions
          options={options}
        />
        <div className='flex justify-center my-10 font-extrabold'>
            <Paginition
                totalPages={data?.total_pages}
            /> 
        </div>
      </div>
    </>
  )
}

export default page
