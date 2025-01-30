'use client'
import ChartList from '@/Components/Charts/ChartList'
import Breadcrumb from '@/Components/Common/Breadcrumb'
import { useGetDepartmentDetailsQuery } from '@/redux/api/departmentsApi'
import { useAppSelector } from '@/redux/hooks'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const page = () => {
  const {dept_name}:{dept_name:string} = useParams()
  const {data, isLoading} = useGetDepartmentDetailsQuery({dept_name})
  const {role} = useAppSelector(state=>state.auth.user)
  const path = usePathname()
    
  
  
  return (
    <div className='px-4'>
      <Breadcrumb
      />
      <div className="flex justify-between items-center">
        
        <div className="flex gap-5 mt-10 items-center text-[36px] font-extrabold mb-8">
          {
            data?.department?.icon?
            <div className={``}
            style={{color:`${data?.department?.color}`}} 
            dangerouslySetInnerHTML={{ __html: data?.department?.icon }}
            />
            :null
          }
          {data?.department?.label}
        </div>
        
        <div className="">
          {
            role.toLowerCase() == 'admin'?
              <Link
                className='px-12 py-2 rounded-sm bg-primary text-negative-color'
                href={path+'/manage'}
              >
                Manage
              </Link>
            :null
          }
        </div>

      </div>
      <ChartList 
        isLoading={isLoading}
        charts={data?.department?.charts}
      />
    </div>
  )
}

export default page
