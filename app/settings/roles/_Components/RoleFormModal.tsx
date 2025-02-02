import Button from '@/Components/Common/Button'
import { Input } from '@/Components/Forms'
import { useRoles } from '@/Components/Hooks/Auth/useRoles'
import BaseModal from '@/Components/Modals/BaseModal'
import { useAddRoleMutation, useEditRoleMutation, useRoleDetailsMutation } from '@/redux/api/rolesApi'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

interface roleType{
    id?:string,
    name:string
}
interface Props{
    handleToggler:()=>void,
    open:boolean,
    roleId?: string
}

const RoleFormModal = ({handleToggler, open, roleId}:Props) => {    
    const [addRole, {isLoading}] = useAddRoleMutation()
    const [editRole, {isLoading:editLoading}] = useEditRoleMutation()
    const {
        form,
        error,
        onChange,
        setError,
        setForm,
        getAsFormData
    } = useRoles({roleId})

    useEffect(()=>{
        if(!open){
            setForm({id:'', name:''})
        }
    }, [open])
    
    
    
    const handleRole = () =>{
        if(error){
            toast.error('برجاء إدخال بيانات المدينة بشكل صحيح')                
            return
        }
        if(form.id){
            editRole({id:form.id, form:getAsFormData()})
            .unwrap()
            .then(res=>{
                handleToggler()
                setForm({id:'', name:''})                
                toast.success(res?.message)        
            }).catch(err=>{
                console.log(err);
                const error = err?.data?.errors
                if(!error)
                    toast.error(err?.data?.error || 'Something went wrong please try again later')        
                else        
                    setError(error)
            })

        }else{
            addRole({form:getAsFormData()})
            .unwrap()
            .then(res=>{
                handleToggler()
                setForm({id:'', name:''})
                toast.success(res?.message)
            }).catch(err=>{
                console.log(err);
                const error = err?.data?.errors
                if(!error)
                    toast.error(err?.data?.error || 'Something went wrong please try again later')        
                else        
                    setError(error)
            })
        }
    }
    return (
        <BaseModal
            handleToggler={handleToggler}
            open={open}
        >
            <div className="w-[50vw] my-8">
                <Input
                    label='Role Name'
                    labelId='name'
                    type='text'
                    value={form.name}
                    onChange={e=>onChange(e, {regex:{value:'^[a-zA-Z]{2,}$', message:"يجب ان يكون كاملا باللغة الإنجليزية و بدون أرقام ولا يقل عن 2 أحرف"}})}
                    errors={error}
                    placeholder='Role Name'
                    required
                />
            </div>
            <div className="grid grid-cols-2 gap-2">
                <Button onClick={handleRole} className='bg-primary hover:bg-transparent hover:text-black border-primary text-white' title={'حفظ'} isLoading={isLoading||editLoading} />
                <Button 
                    className='w-full py-2 rounded-lg border border-secondary text-center hover:bg-secondary hover:text-white transition-all'
                    onClick={handleToggler}
                    isLoading={false}
                    title='cancel'
                />
        </div>
        </BaseModal>
    )
}

export default RoleFormModal
