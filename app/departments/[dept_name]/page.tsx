'use client'
import ChartList from '@/Components/Charts/ChartList'
import { useGetDepartmentDetailsQuery } from '@/redux/api/departmentsApi'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const {dept_name}:{dept_name:string} = useParams()
  const {data, isLoading} = useGetDepartmentDetailsQuery({dept_name})
  
  
    
  console.log(data?.department?.charts);
  
  return (
    <div>
    <div className="flex gap-2 items-center text-[36px] font-extrabold mb-8">
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
      <ChartList 
        isLoading={isLoading}
        charts={data?.department?.charts}
      />
    </div>
  )
}

export default page
