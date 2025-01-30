import Button from '@/Components/Common/Button'
import { ImageInput, Input } from '@/Components/Forms'
import { arDepartmentNameRegex, departmentNameRegex } from '@/Components/Hooks/Common/validationsRegexRepo'
import { useDpartmentsForm } from '@/Components/Hooks/Departments/useDepartments'
import { useAddDepartmentMutation, useEditDepartmentMutation } from '@/redux/api/departmentsApi'
import React, { FormEvent } from 'react'
import { toast } from 'react-toastify'

const DepartmentForm = ({dept_name}:{dept_name?:string}) => {
    const {
        form,
        formErrors,
        getAsFormData,
        onChange,
        selectChange,
        setFormErrors,
        changeCurrentFile
    } = useDpartmentsForm({dept_name})

    const [addDepartment, {isLoading:AddLoading}] = useAddDepartmentMutation()
    const [editDepartment, {isLoading:EditLoading}] = useEditDepartmentMutation()
    
    const onSubmit = (e:FormEvent) =>{
        console.log(dept_name);
        
        e.preventDefault()
        if (!dept_name){
            addDepartment({form:getAsFormData()})
                .unwrap()
                .then(res=>{
                    console.log(res);
                    toast.success(res?.message || 'Department added sucessfully!')
                }).catch(err=>{
                    console.log(err.data);
                    setFormErrors(err.data)
                })
            }
        else{
            editDepartment({dept_name, form:getAsFormData()})
                .unwrap()
                .then(res=>{
                    console.log(res);
                    toast.success(res?.message || 'Department saved sucessfully!')
                }).catch(err=>{
                    console.log(err);
                })

        }

        
    }
  return (
    <form onSubmit={onSubmit} className='bg-container p-8 rounded-md my-2'>
        <div className="w-1/2 mb-12">
            <Input
                label='Name'
                labelId='name'
                type='text'
                required
                onChange={(e)=>onChange(e, {regex:departmentNameRegex})}
                value={form.name}
                errors={formErrors?.name}
            />
        </div>
        
        <div className="w-1/2 mb-8">
            <Input
                label='Arabic Name'
                labelId='ar_name'
                type='text'
                required
                onChange={(e)=>onChange(e, {regex:arDepartmentNameRegex})}
                value={form.ar_name}
                errors={formErrors?.ar_name}
            />
        </div>
        
        <div className="w-1/2 mb-8">
            <ImageInput 
                label='Icon'
                labelId='icon'
                type='file'
                required
                errors={formErrors?.icon}
                file={form.icon}
                onChange={e=>changeCurrentFile(e, ['image/jpeg', 'image/svg+xml'])}
            />
        </div>
        
        
        <div className="flex justify-end">
            <Button
                title='save'
                isLoading={AddLoading || EditLoading}
                submit
                className='bg-primary text-white w-[150px!important]'
            />
        </div>
        
        
        
    </form>
  )
}

export default DepartmentForm
