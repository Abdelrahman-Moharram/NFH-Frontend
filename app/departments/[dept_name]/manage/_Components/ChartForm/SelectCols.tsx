import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { SharedProps } from '.'
import { useAddChartAxisMutation, useGetChartColsMutation } from '@/redux/api/reportsApi'
import { useRouter, useSearchParams } from 'next/navigation'
import { FloatingSelectInput, SelectInput } from '@/Components/Forms'
import Button from '@/Components/Common/Button'
import { toast } from 'react-toastify'

const SelectCols = ({
  form,
  formErrors,
  onChange,
  selectChange,
  dropdowns,
  onSubmit
}:SharedProps) => {
    const searchParams      = useSearchParams()
    const router            = useRouter()
    const chart_id          = searchParams.get("chart_id")
    const [cols, setCols]   = useState<string[]>([])
    const [dims, setDims]   = useState<{x:string,y:string[]}>(
      {
        x:'',
        y:[]
      }) 
    const [getChartCols, {data, isLoading}] = useGetChartColsMutation()
    const [addChartAxis] = useAddChartAxisMutation()
    
    useEffect(()=>{
            // if (chart_id)   
            getChartCols({chart_id:'197795e7-c686-481e-bf1d-3c5c34adc72e'})
              .unwrap()
              .then(res=>{
                setCols(res?.cols_names)
              })
        },[])
    const handleAddToY = (value:string, isAdd:boolean) =>{
      if (isAdd){
        setDims({...dims, y:[...dims.y, value]})
        setCols(cols.filter(col=>col != value))

      }else{
        setDims({...dims, y:[...dims.y.filter(i=>(i!=value))]})
        setCols([...cols, value])
      }

    }
    const handleAddToX = (e:ChangeEvent<HTMLSelectElement>)=>{
      const value = e.target.value   
      const tempCols = [...cols, dims.x] // old x added
      
      setDims({...dims, x:value})
      setCols(tempCols.filter(col=>col != value))
    }
    const submit = () =>{
      const form = new FormData()
      form.append('x', dims.x)
      for(let col of dims.y)
        form.append('y', col)
      // if(chart_id)
      addChartAxis({chart_id:'197795e7-c686-481e-bf1d-3c5c34adc72e', form})
        .unwrap()
        .then(res=>{
          toast.success(res?.message)
          router.push('/departments/human-resources/manage/charts')
        })
        .catch(err=>{
          console.log(err);
        })
    }

  return (
    <div className="flex flex-1 items-center min-h-[300px] py-3 gap-4">
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
            value={dims.x}
            required
            options={data?.cols_names?.map((col:string)=>({label:col, value:col}))}
          />
          <div className="relative border rounded-md flex items-center gap-3 px-2">
            <div className="absolute start-2.5 top-0 -translate-y-4 bg-container py-0 px-2 text-md">Y</div>
            {
              dims?.y.map(col=>(
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
            onClick={submit}
            isLoading={false}
            className='bg-primary border-primary text-white hover:bg-transparent hover:text-primary'
        />
      </div>
    </div>
  )
}

export default SelectCols
