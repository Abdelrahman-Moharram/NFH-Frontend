import { DefaultInputValidate } from "@/Components/Hooks/Common/useValidations"
import { ValidationsType } from "@/Components/Types/Others"
import { useAddReportBaseDataMutation, useAddReportChartDataMutation, useAddReportMutation, useGetFormDropdownsQuery,  } from "@/redux/api/reportsApi"
import { usePathname, useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-toastify"

const baseChartForm = {
    name:'',
    connection:'',
    chart_type:'',
    query:'',
    width:''
}
export interface ChartFormType{
    name        :string
    connection  :string
    chart_type  :string
    query       :string
    width       :string
    report_id?  :string
}

export const useChartsForm = ({dept_name, chart_id, step}:{dept_name:string, chart_id?:string, step:number}) =>{
    const [form, setForm]               = useState<ChartFormType>(baseChartForm)
    const [formErrors, setFormErrors]   = useState<any>()
    const pathName                      = usePathname()
    const router                        = useRouter()
    
    const {data:dropdowns}              = useGetFormDropdownsQuery(undefined)
    const [addReport]                   = useAddReportMutation()
    const [addReportBaseData]           = useAddReportBaseDataMutation()
    const [addReportChartData]          = useAddReportChartDataMutation()


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
        formData.append('dept_name',    dept_name)
        formData.append('name',         form.name)
        formData.append('connection',   form.connection)
        formData.append('chart_type',   form.chart_type)
        formData.append('query',        form.query)
        formData.append('width',        form.width)
        return formData
    }

    const submitBaseData = (e:FormEvent) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('dept_name',    dept_name)
        formData.append('name',         form.name)
        formData.append('connection',   form.connection)

        addReportBaseData({form:formData})
            .unwrap()
            .then(res=>{
                if(res?.message)
                    toast.success(res?.message)
                setForm({...form, report_id:res?.id})
                router.push(pathName+`?step=${step+1}`)
                

            }).catch(err=>{
                console.log(err?.data);
            })
    }

    const submitChartData = (e:FormEvent) =>{
        e.preventDefault()
        if(!form?.report_id){
            toast.error('invalid step report id is invalid please start from the begining')
            return
        }

        const formData = new FormData()
        
        formData.append('chart_type',   form.chart_type)
        formData.append('query',        form.query)
        formData.append('width',        form.width)

        addReportChartData({form:formData, report_id:form.report_id})
            .unwrap()
            .then(res=>{
                if(res?.message)
                    toast.success(res?.message)
                // router.push(pathName+`?step=${step+1}`)
            }).catch(err=>{
                console.log(err?.data);
            })

    }
        

    const submitAllChartData = (e:FormEvent) =>{
        e.preventDefault()
        if(chart_id){
        addReport({form:getAsFormData(), step})
            .unwrap()
            .then(res=>{
                if(res?.message)
                    toast.success(res?.message)
                
                if (step < 3)
                    router.push(pathName+`?step=${step+1}`)
                else
                    router.push(pathName.replace('/add', ''))

            }).catch(err=>{
                console.log(err?.data);
            })
        }
    }

return {
        form,
        formErrors,
        onChange,
        selectChange,
        setFormErrors,
        getAsFormData,
        dropdowns,

        submitBaseData,
        submitChartData,
        submitAllChartData,
    }
}