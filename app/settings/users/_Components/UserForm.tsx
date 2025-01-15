import Button from '@/Components/Common/Button'
import { Input, SelectInput } from '@/Components/Forms'
import { useUsersForm } from '@/Components/Hooks/Auth/useAccounts'
import { isErrorsList } from '@/Components/Hooks/Common/useValidations'
import { fullNameRegex, usernameRegex } from '@/Components/Hooks/Common/validationsRegexRepo'
import OverLayFuncArea from '@/Components/Modals/OverLayFuncArea'
import { useAddUserMutation, useEditUserMutation } from '@/redux/api/accountsApi'
import React from 'react'
import { toast } from 'react-toastify'

interface baseType{
    id:string,
    name:string,
    
    
}
const UserForm = ({action, open, userId}:{action:()=>void, open:boolean, userId?:string}) => {
    const [addUser, {isLoading:addLoading}] = useAddUserMutation()
    const [editUser, {isLoading:editLoading}] = useEditUserMutation()
    const {
        user,
        formErrors,
        dropDowns,
        onChange,
        selectChange,
        setFormErrors,
        getUserAsFormData,
    } = useUsersForm({userId, toggler:open})
    const handleUser = () =>{
        if(userId){
            setFormErrors({...formErrors, password:null})
        }
        
        if(isErrorsList(formErrors, userId?['password']:[])){
            toast.error('you should solve these errors before Re-Submission')
            return
        }
        if(userId)
        {
            editUser({id:userId, form:getUserAsFormData()})
            .unwrap()
            .then(res=>{
                console.log(res);
                
                toast.success(res?.message || 'user saved successfully')
                action()
            })
            .catch(err=>{
                setFormErrors(err?.data?.errors)                
                if(err?.status !== 403)
                    toast.error(err?.message || "user didn't saved successfully")
            })
        }else{
            addUser({form:getUserAsFormData()})
                .unwrap()
                .then(res=>{
                    toast.success(res?.message || 'something went wrong please try again')
                    action()
                })
                .catch(err=>{
                    setFormErrors(err?.errors)
                    toast.error('something went wrong please try again')
                })
        }
    }
  return (
    <div className='relative min-h-[80%] px-12 mt-12'>
        <div className="grid grid-cols-2 gap-3 h-[80%] overflow-y-auto">
            <div className="mb-2">
                <Input
                    onChange={e=>onChange(e, {regex:usernameRegex})}
                    value={user.username}
                    label='Username'
                    labelId='username'
                    type='text'
                    errors={formErrors?.username}
                    required={true}
                />
            </div>
            <div className="mb-2">
                <Input
                    onChange={e=>onChange(e, {regex:fullNameRegex})}
                    value={user.full_name}
                    label='Full Name'
                    labelId='full_name'
                    type='text'
                    errors={formErrors?.full_name}
                    required={true}
                />
            </div>
            
            <div className="mb-2">
                <SelectInput
                    labelId='role'
                    label='Role'
                    onChange={selectChange}
                    value={user?.role}
                    required={true}
                    errors={formErrors?.role}
                >
                    {
                        dropDowns?.roles?.length?
                            dropDowns?.roles.map((role:baseType)=>(
                                <option key={role?.id} value={role?.id}>{role?.name}</option>   
                            ))
                        :
                        null
                    }  
                </SelectInput>
            </div>
            
            {
                userId
                ?
                    null
                :
                <div className="col-span-1 mb-2">
                    <Input
                        onChange={e=>onChange(e, {minLength:{value:8, message:'Password should has at least 8 letters'}})}
                        value={user.password}
                        label='password'
                        labelId='password'
                        type='password'
                        errors={formErrors?.password}
                        required={true}
                    />
                </div>
            }
        </div>
        <OverLayFuncArea
            open={open}
        >
            <Button 
                onClick={action}
                className='w-full py-2 rounded-lg border border-secondary text-center hover:bg-secondary hover:text-white transition-all'
                title={'Cancel'} 
                isLoading={false}
            />
            <Button onClick={handleUser} className='bg-primary border-primary text-white hover:text-black hover:bg-transparent' title={'Save'} isLoading={addLoading||editLoading} />
        </OverLayFuncArea>
    </div>
  )
}

export default UserForm
