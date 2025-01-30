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
            <div className="w-[50%]">
                <ImageSkeleton
                    height='510px'
                    width='100%'
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
    <div className='flex gap-1'>

        {
        isLoading?
            <DynamicChartSkeleton />
        :
        charts?
            charts?.map((chart:any)=>(
            <div className={`bg-card h-auto px-2 rounded-xl`} style={{width:`${chart?.chart?.options?.width}`}}>
                <Chart
                  type={chart?.chart?.options?.type}
                  title={chart?.name}
                  data={chart?.chart?.data}
                  options={options}
                  controls
                />
            </div>
            ))
        :
            <div className="w-full">
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
