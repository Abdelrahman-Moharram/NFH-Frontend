'use client'
import MainCard from '@/Components/Cards/MainCard';
import { ImageSkeleton } from '@/Components/Common';
import EmptyData from '@/Components/Common/EmptyData';
import { useGetDepartmentReportsQuery } from '@/redux/api/departmentsApi'
import { useParams } from 'next/navigation'
import React from 'react'
import { FcPieChart } from "react-icons/fc";

interface reportType{
  id:string
  name:string
  connection:string
  chart_type:string
}

const handleSkeleton = () =>{
  const l = []
  for(let i=0; i < Math.random()*10; i++){
    l.push(
      <ImageSkeleton
        height='197px'
        width='100%'
        rounded='5px'
        shadow
      />
    )
  }
  return l
}

const ReportChartList = () => {
  const {dept_name}:{dept_name:string} = useParams()
  const {data, isLoading} = useGetDepartmentReportsQuery({dept_name})
  
  return (
    <div className='grid grid-cols-2 gap-4 py-5'>
    {
      isLoading?
        handleSkeleton()
      :
        data?.reports?.length?
          data?.reports.map((report:reportType)=>(
            <MainCard
              description={report?.connection + ` ( ${report?.chart_type} )`}
              href={'charts/'+report?.id}
              icon={<FcPieChart />}
              title={report?.name}
            />
          ))
        :
        <div className="col-span-2">
          <EmptyData 
            height='510px'
            message='No Charts added yet'
          />
        </div>
    }
    </div>
  )
}

export default ReportChartList
