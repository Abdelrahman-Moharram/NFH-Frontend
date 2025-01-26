'use client'
import Chart from '@/Components/Charts/Chart'
import DynamicChart from '@/Components/Charts/DynamicChart'
import { chartTypes } from '@/Components/Charts/Types'
import { useGetDepartmentDetailsQuery } from '@/redux/api/departmentsApi'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const {dept_name}:{dept_name:string} = useParams()
  const {data, isLoading} = useGetDepartmentDetailsQuery({dept_name})
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      // tooltip: {
      //   enabled: true,
      // },
    },
    scales: {
      y: {
        type: "linear",
        position: "left",
      
      },
    },
  };
    
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
    {
      !isLoading?
        <div className='grid grid-cols-2'>
          {
            data?.department?.charts?
              data?.department?.charts?.map((chart:any)=>(
                <div className="col-span-1 px-2">
                  <Chart
                    type={chart?.chart?.options?.type}
                    title={chart?.name}
                    data={chart?.chart?.data}
                    options={options}
                    colSpan={4}
                    controls
                    customBackGround=''
                  />
                </div>
              ))
            :null
          }
        </div>
      :null
    }
    </div>
  )
}

export default page
