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
// const options = {
//   responsive: true,
//   maintainAspectRatio: false,
//   plugins: {
//     // legend: { display: false }, // Hide legend
//   },
//   scales: {
//     x: {
//       grid: { display: false }, // Hide grid lines
//       ticks: { color: "#4A5A74", font: { weight: "bold" } },
//     },
//     y: {
//       display: false, // Hide Y-axis labels
//       min: 0,
//       max: 200, // Ensures space above max value
//       grid: { display: false },
//     },
//   },

// };
  
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
    <div className='grid grid-cols-2 gap-4 py-12'>

        {
          isLoading?
            <DynamicChartSkeleton />
        :
          charts && charts?.length?
            charts?.map((chart:any)=>(
            <div className={` w-full ${chart?.chart?.utils?.width == '100%' ? 'col-span-2':'col-span-1'}`}>
              <div className={`bg-card px-2  max-h-[800px] mx-auto rounded-xl ${chart?.chart?.utils?.width == '100%' ? 'w-[80%]':'w-full'}`}>
                  <Chart
                    type={chart?.chart?.utils?.type}
                    title={chart?.name}
                    data={chart?.chart?.data}
                    options={chart?.chart?.options || options}
                    controls
                  />
              </div>
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
