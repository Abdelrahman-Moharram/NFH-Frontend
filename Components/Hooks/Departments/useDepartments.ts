import { departmentFormType } from "@/Components/Charts/Types"
import { ChangeEvent, useEffect, useState } from "react"
import { DefaultInputValidate } from "../Common/useValidations"
import { ValidationsType } from "@/Components/Types/Others"
import { useGetFormDepartmentDetailsMutation } from "@/redux/api/departmentsApi"


export const useDpartmentsForm = ({dept_name}:{dept_name?:string}) =>{
    const [getDepartmentDetails] = useGetFormDepartmentDetailsMutation()

    const baseDepartment = {
        name:'',
        ar_name:'',
        icon:'',
        color:'',
    }
    useEffect(()=>{
        if(dept_name){
            getDepartmentDetails({dept_name})
                .unwrap()
                .then(res=>{                   
                    setForm(res.department)
                }).catch(err=>{
                    console.log(err);
                })
        }
        
    }, [dept_name])

    const [form, setForm] = useState<departmentFormType>(baseDepartment)
    const [formErrors, setFormErrors] = useState<any>(null)

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

    const imageChange = (file:File)=>{
        setForm({ ...form, icon: file });
    }

    const changeCurrentFile = (e:ChangeEvent<HTMLInputElement>, types:string[]) =>{
        const files = e.target.files
        
        if (files?.length && imageChange){
            console.log(files[0].type);
            
            if (types.includes(files[0].type)){
                imageChange(files[0])
                setFormErrors({...formErrors, [e.target.name]:undefined})
            }
            else{
                setFormErrors({...formErrors, [e.target.name]:`Invalid File Type Only Allowed [${types.join(',')}]`})
            }
        }
    }

    

    const getAsFormData = () =>{
        
        const formData = new FormData()
        formData.append('name', form.name)
        formData.append('ar_name', form.ar_name)
        
        formData.append('icon', form.icon)
        formData.append('color', form.color)
        

        return formData
    }

    return {
        form,
        formErrors,
        onChange,
        selectChange,
        setFormErrors,
        getAsFormData,
        changeCurrentFile
    }
}