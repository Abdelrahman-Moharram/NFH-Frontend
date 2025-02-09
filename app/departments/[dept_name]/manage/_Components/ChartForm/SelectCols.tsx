import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { SharedProps } from '.'
import { useGetChartColsMutation } from '@/redux/api/reportsApi'
import { FloatingSelectInput } from '@/Components/Forms'
import Button from '@/Components/Common/Button'
import { ChartFormType } from '@/Components/Hooks/Reports/useChart'

const SelectCols = ({
    form,
    setForm,
    onSubmit,
  }:SharedProps&{setForm:(form:ChartFormType)=>void}) => {
  const [cols, setCols]   = useState<string[]>([])
  
  const [getChartCols, {data, isLoading}] = useGetChartColsMutation()
  
  useEffect(()=>{
    if (form?.chart_id)   
      getChartCols({chart_id:form?.chart_id})
        .unwrap()
        .then(res=>{
          setCols(res?.cols_names)
        })
  },[])
  const handleAddToY = (value:string, isAdd:boolean) =>{
    if (isAdd){
      setForm({...form, y_axes:[...form.y_axes, value]})
      setCols(cols.filter(col=>col != value))

    }else{
      setForm({...form, y_axes: [...form.y_axes.filter(i=>(i!=value))]})
      setCols([...cols, value])
    }

  }
  const handleAddToX = (e:ChangeEvent<HTMLSelectElement>)=>{
    const value = e.target.value   
    const tempCols = [...cols, form.x_axis] // old x added
    
    setForm({...form, x_axis:value})
    setCols(tempCols.filter(col=>col != value))
  }

  const submitCols = (e:FormEvent) =>{

  }
    

  return (
    <form onSubmit={onSubmit} className="flex flex-1 items-center min-h-[300px] py-3 gap-4">
      <div className="flex flex-col w-auto space-y-2 rounded-lg border border-gray-100 bg-gray-100 p-1">
        <p className='text-center font-semibold'>cols</p>
        {
          data?.cols_names?.map((col:string)=>(
            cols.includes(col)?
              <button
                key={col}
                onClick={()=>handleAddToY(col, true)}
                className="block w-auto flex-grow rounded-md bg-container px-4 py-2 text-sm text-blue-500 shadow-xs focus:relative"
              >
                {col}
              </button>
            :
              <div
                key={col}
                className="block w-auto flex-grow rounded-md bg-gray-200 px-4 py-2 text-sm text-blue-500 shadow-xs focus:relative text-center"
              >
                {col}
              </div>
          ))
        }
      </div>

      <div className="h-full min-h-[200px] w-0.5 bg-card "></div>

      <div className="min-w-[70%]">
        <div className="grid grid-cols-2 gap-4">
          <FloatingSelectInput 
            label='X'
            labelId='x'
            onChange={handleAddToX}
            value={form.x_axis}
            required
            options={[...cols, form.x_axis].map((col:string)=>({label:col, value:col}))}
          />
          <div className="relative border rounded-md flex items-center gap-3 px-2">
            <div className="absolute start-2.5 top-0 -translate-y-4 bg-container py-0 px-2 text-md">Y</div>
            {
              form?.y_axes.map(col=>(
                <button
                  key={col}
                  onClick={()=>handleAddToY(col, false)}
                  className="block w-auto flex-grow rounded-md bg-card text-sm px-4 py-2 text-blue-500 shadow-xs focus:relative"
                >
                  {col}
                </button>
              ))
            }
          </div>
        </div>
      </div>
      <div className={`flex left-12 right-12 p-5 drop-shadow-md absolute rounded-lg bg-container transition-all duration-500 ease-linear delay-300 gap-3 mx-0 bottom-10`}>
      
        <Button 
          title={'Save'}
          submit
          isLoading={false}
          className='bg-primary border-primary text-white hover:bg-transparent hover:text-primary'
        />
      </div>
    </form>
  )
}

export default SelectCols
