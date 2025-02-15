import Button from '@/Components/Common/Button'
import { Input, SelectInput } from '@/Components/Forms'
import { domainRegex, portNumberRegex, usernameRegex } from '@/Components/Hooks/Common/validationsRegexRepo'
import { useConnectionsForm } from '@/Components/Hooks/Connections/useConnectionsForm'
import OverLayFuncArea from '@/Components/Modals/OverLayFuncArea'
import React from 'react'

interface Props{
    connection_id   :   string, 
    show            :   boolean, 
    handleShow      :   ()=>void
}
const ConnectionForm = ({connection_id, show, handleShow}:Props) => {
    const {
        form,
        formErrors,
        isLoading,
        dropdowns,
        onChange,
        selectChange,
        onSubmit
    } = useConnectionsForm({connection_id})
  
    return (
        <form 
            className='grid grid-cols-2 py-5 px-12'
            onSubmit={e=>{onSubmit(e, handleShow)}}
            method='POST'
        >

            <div className="col-span-2 mb-4">
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
            <div className="col-span-2 mb-12">
                <SelectInput
                    onChange={selectChange}
                    value={form.connection_type}
                    required
                    labelId='connection_type'
                    label='Connection Type'
                    options={dropdowns?.connection_types?.map((connection:string)=>({value:connection, label:connection}))}
                />
            </div>
            
            <div className="col-span-2 flex gap-4 mb-8">
                <div className="w-[80%]">
                    <Input
                        labelId='ip'
                        onChange={e=>onChange(e, {regex:domainRegex})}
                        type='text'
                        value={form.ip}
                        errors={formErrors?.ip}
                        required
                        label='IP Address'
                    />
                </div>
                <div className="w-[20%]">
                    <Input
                        labelId='port'
                        onChange={e=>onChange(e, {regex:portNumberRegex})}
                        type='number'
                        value={form.port}
                        errors={formErrors?.port}
                        required
                        label='Port Number'
                    />
                </div>
            </div>

            <div className="col-span-2 mb-12">
                <Input
                    labelId='schema'
                    onChange={onChange}
                    type='text'
                    value={form.schema}
                    errors={formErrors?.schema}
                    required
                    label='Schema Name'
                />
            </div>
            
            <div className='flex col-span-2 gap-4'>
                <div className="w-full">
                    <Input
                        labelId='username'
                        onChange={e=>onChange(e)}
                        type='text'
                        value={form.username}
                        errors={formErrors?.username}
                        required
                        label='Username'
                    />
                </div>
                <div className="w-full">

                    <Input
                        labelId='password'
                        onChange={e=>onChange(e)}
                        type='password'
                        value={form.password}
                        errors={formErrors?.password}
                        required
                        label='Password'
                    />
                </div>
            </div>
            <OverLayFuncArea 
                open={show}
            >
                <Button 
                    title='Cancel'
                    isLoading={false}
                    onClick={handleShow}
                    className='border-secondary hover:bg-secondary hover:text-white'
                />
                <Button 
                    title={'Save & Continue'}
                    submit
                    isLoading={isLoading}
                    className='bg-primary border-primary text-white hover:bg-transparent hover:text-primary'
                />
            </OverLayFuncArea>
        </form>
    )
}

export default ConnectionForm
