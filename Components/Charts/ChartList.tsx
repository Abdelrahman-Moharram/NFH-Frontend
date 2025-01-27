import React from 'react'
import Chart from './Chart'
import { ImageSkeleton } from '../Common';
import EmptyData from '../Common/EmptyData';

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
  
  const DynamicChartSkeleton = () =>{
    const l = []
    for(let i = 0; i < Math.random()*10; i++)
    {
        l.push(
            <div className="col-span-3">
                <ImageSkeleton
                    height='510px'
                    width='97%'
                    rounded='10px'
                    margin='4px'
                    shadow
                />
            </div>
        )
    }
    return l
  }
const ChartList = ({charts, isLoading}:{charts:any, isLoading:boolean}) => {
  return (
    <div className='grid grid-cols-6'>

        {
        isLoading?
            <DynamicChartSkeleton />
        :
        charts?
            charts?.map((chart:any)=>(
            <div className={`  ${'col-span-'+String(chart?.chart?.options?.width)} px-2`}>
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
        :
            <div className="col-span-6">
                <EmptyData 
                    height='510px'
                    message='No Charts Available'
                />
            </div>
        }
    </div>
  )
}

export default ChartList
