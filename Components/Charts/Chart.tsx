import React, { useRef } from 'react'
import DynamicChart from './DynamicChart'
import { chart_types } from './Types'
import Options from '../Common/Options'
import { exportAsPdf, exportAsPng } from '../utils/helper'
import { ImageIcon, PdfIcon } from '../Shared/SharedIcons'

interface Props{
  // customBackGround: string,
  controls: boolean
  title? : string
}
const Chart = ({title, data, options, type, controls}:chart_types & Props) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  const GetChartOptions = () =>{
    if(! controls)
      return 
    return(
      <div className="absolute top-8 right-5 drop-shadow-2xl z-20">
        <Options>
          <button onClick={()=>exportAsPng(elementRef)} className='w-full flex items-center gap-2 px-5 py-2 hover:bg-card transition-all duration-300'><ImageIcon /> download as png</button>
          <button onClick={()=>exportAsPdf(elementRef)} className='w-full flex items-center gap-2 px-5 py-2 hover:bg-card transition-all duration-300'><PdfIcon /> download as pdf</button>
        </Options>     
      </div>
    )
  }
  return (
    <div className="relative mx-auto">
      
      <GetChartOptions />
      <div className="p-4">
        <div className="text-[24px] font-extrabold text-secondary ">
          {title}
        </div>
        <div className='drop-shadow-xl overflow-hidden pt-6 space-y-5 h-[90%] max-h-[500px] my-auto' ref={elementRef}>
          <DynamicChart
            type={type}
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  )
}

export default Chart
