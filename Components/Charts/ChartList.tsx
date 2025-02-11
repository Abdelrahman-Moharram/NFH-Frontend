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
    <div className='grid grid-cols-2 gap-4 space-y-4 py-12'>

        {
          isLoading?
            <DynamicChartSkeleton />
        :
          charts && charts?.length?
            charts?.map((chart:any)=>(
            <div className={`bg-card h-auto px-2 max-h-[600px] mx-auto rounded-xl ${chart?.chart?.options?.width == '100%' ? 'col-span-2':'col-span-1'}`}>
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
          <div className="col-span-2">
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
