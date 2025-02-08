'use client'
import ChartList from '@/Components/Charts/ChartList'
import Breadcrumb from '@/Components/Common/Breadcrumb'
import { useGetDepartmentDetailsQuery } from '@/redux/api/departmentsApi'
import { useAppSelector } from '@/redux/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const page = () => {
  const {dept_name}:{dept_name:string} = useParams()
  const {data, isLoading} = useGetDepartmentDetailsQuery({dept_name})
  const {role} = useAppSelector(state=>state.auth.user)
  const path = usePathname()
    
  
  
  console.log(data?.department?.charts);
  
  return (
    <div className='px-4'>
      <Breadcrumb
      />
      <div className="flex justify-between items-center">
        
        <div className="flex gap-5 mt-10 items-center text-[36px] font-extrabold mb-8">
          {
            data?.department?.icon?
            <Image
              height={40}
              width={40}
              src={process.env.NEXT_PUBLIC_HOST + data?.department?.icon} 
              alt={data?.department?.label} 
              unoptimized
            />
            :null
          }
          <h1>{data?.department?.label}</h1>
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
