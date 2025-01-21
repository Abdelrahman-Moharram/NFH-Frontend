'use client'
import DynamicChart from '@/Components/Charts/Chart'
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
        beginAtZero: true,
        ticks: {
          callback: function (value:string) {
            // Format Y-axis labels
            console.log(value);
            return value.toLocaleString(); // Adds commas
          },
        },
      },
    },
  };
    
  
  return (
    <div>
    {
      !isLoading?
        <div className='grid grid-cols-2'>
          <div className="col-span-1">
            <DynamicChart
              type='line'
              data={data?.chart}
              options={options}
            />
          </div>
        </div>
      :null
    }
    </div>
  )
}

export default page
