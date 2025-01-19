'use client'
import Breadcrumb from '@/Components/Common/Breadcrumb'
import SmallCardsList from '@/Components/Lists/SmallCardsList'
import { useGetDepartmentsListQuery } from '@/redux/api/departmentsApi'
import React from 'react'
import { ImHome3 } from 'react-icons/im'

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
    const {data, isLoading} = useGetDepartmentsListQuery(undefined)
    
  return (
    <div className="px-4">
      <div className="my-8 flex justify-between items-center">
        <Breadcrumb
          items={BreadcrumbData}
        />
      </div>
      {
        <SmallCardsList 
            SkeletonNum={9}
            items={data?.departments}
            preLink='departments'
            skeletonHeight='100px'
            skeletonWidth='400px'
            isLoading={isLoading}
        />
      }
      
    </div>
  )
}

export default page
