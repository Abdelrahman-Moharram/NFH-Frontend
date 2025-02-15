import { DefaultInputValidate } from "@/Components/Hooks/Common/useValidations"
import { ValidationsType } from "@/Components/Types/Others"
import { useAddConnectionMutation, useGetConnectionFormDropdownsQuery } from "@/redux/api/connectionsApi"
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-toastify"

const baseConnectionForm = {
    name            :   '',
    ip              :   '',
    port            :   '',
    schema          :   '',
    connection_type :   '',
    username        :   '',
    password        :   '',
}

export interface ConnectionFormType{
    id?             :   string
    name            :   string
    ip              :   string
    port            :   string
    schema          :   string
    connection_type :   string
    username        :   string
    password        :   string
}

export const useConnectionsForm = ({connection_id}:{connection_id?:string}) =>{
    const [form, setForm]               = useState<ConnectionFormType>(baseConnectionForm)
    const [formErrors, setFormErrors]   = useState<any>()
    
    const {data:dropdowns}    = useGetConnectionFormDropdownsQuery(undefined)
    const [addConnection, {isLoading}]    = useAddConnectionMutation()



    // functions
    const onChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, validationSchema?:ValidationsType ) => {
        const { name, value } = event.target;
        if(validationSchema)
            setFormErrors({...formErrors, [name]:DefaultInputValidate({name, value, validationSchema})})
        setForm({ ...form, [name]: value });
    };

    const selectChange = (e: ChangeEvent<HTMLSelectElement>,  validationSchema?:ValidationsType)=>{
        const { name, value } = e.target;        
        if(validationSchema)
            setFormErrors({...formErrors, [name]:DefaultInputValidate({name, value, validationSchema})})
        setForm({ ...form, [name]: value });
    }

    



    const getAsFormData = () =>{
        const formData = new FormData()
        formData.append('name',         form.name)
        return formData
    }

    const onSubmit = (e:FormEvent, handleShow:()=>void) =>{
        e.preventDefault()
        const formData = new FormData()
        if (form?.id)
            formData.append('id',           form.id)

        formData.append('name',             form.name)
        formData.append('ip',               form.ip)
        formData.append('port',             form.port)
        formData.append('schema',           form.schema)
        formData.append('connection_type',  form.connection_type)
        formData.append('username',         form.username)
        formData.append('password',         form.password)

        addConnection({form:formData})
            .unwrap()
            .then(res=>{
                if(res?.message)
                    toast.success(res?.message)
                setForm(baseConnectionForm)
                handleShow()

            }).catch(err=>{
                console.log(err?.data?.errors);
                if(err?.data?.error || err?.data?.errors?.non_field_errors)
                    toast.error(err?.data?.error || err?.data?.errors?.non_field_errors[0])

                setFormErrors(err?.data?.errors)
            })
    }


return {
        form,
        formErrors,
        isLoading,
        dropdowns,
        onChange,
        selectChange,
        setFormErrors,
        getAsFormData,
        onSubmit,
        setForm
    }
}