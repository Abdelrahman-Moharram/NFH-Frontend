import React from 'react'
import { SharedProps } from '.'
import { Input, SelectInput } from '@/Components/Forms'
import { baseType } from '@/Components/Types/Others'
import Button from '@/Components/Common/Button'




const Initial = ({
  form,
  formErrors,
  onChange,
  selectChange,
  dropdowns,
  currentStep,
  onSubmit
}:SharedProps) => {
  return (
    <form 
      onSubmit={onSubmit}
      method='post'
    >
      <div className='py-12  space-y-12'>
        <div className="w-full">
          <Input
              labelId='name'
              onChange={onChange}
              type='text'
              value={form.name}
              errors={formErrors?.name}
              required
              label='Name'
          />
        </div>
        
        <div className="w-full">
          <SelectInput
              onChange={selectChange}
              value={form.connection}
              required
              labelId='connection'
              label='connection'
          >
              {
                dropdowns?.connections?.map((connection:baseType)=>(
                  <option value={connection?.id}>{connection?.name}</option>
                ))
              }
          </SelectInput>
        </div>
      </div>
      <div className={`flex left-12 right-12 p-5 drop-shadow-md absolute rounded-lg bg-container transition-all duration-500 ease-linear delay-300 gap-3 mx-0 bottom-10`}>
      {
        currentStep > 1?
          <Button 
            title='Previous'
            isLoading={false}
            className='border-secondary hover:bg-secondary hover:text-white'
          />
        :null
      }
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

export default Initial
