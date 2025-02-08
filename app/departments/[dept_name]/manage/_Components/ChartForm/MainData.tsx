import { SelectInput, TextArea } from '@/Components/Forms'
import React from 'react'
import { SharedProps } from '.'
import { baseType } from '@/Components/Types/Others'
import Button from '@/Components/Common/Button'

const MainData = ({
  form,
  formErrors,
  onChange,
  selectChange,
  dropdowns,
  onSubmit
}:SharedProps) => {
  
  return (
    <form 
      className='py-12 space-y-12'
      onSubmit={onSubmit}
      method='post'
    >    
      <div className="w-full">
        <SelectInput
          onChange={selectChange}
          value={form.chart_type}
          required
          labelId='chart_type'
          label='Chart Type'
        >
        {
          dropdowns?.chart_types?.map((chart_type:baseType)=>(
            <option value={chart_type?.id}>{chart_type?.name}</option>
          ))
        }
        </SelectInput>
      </div>
      <div>
        <TextArea
          label='Query'
          labelId='query'
          onChange={onChange}
          value={form.query}
          errors={formErrors?.query}
          required
        />
      </div>
      <div className={`flex left-12 right-12 p-5 drop-shadow-md absolute rounded-lg bg-container transition-all duration-500 ease-linear delay-300 gap-3 mx-0 bottom-10`}>
      
        <Button 
            title={'Save & Continue'}
            submit
            isLoading={false}
            className='bg-primary border-primary text-white hover:bg-transparent hover:text-primary'
        />
      </div>
    </form>
  )
}

export default MainData
