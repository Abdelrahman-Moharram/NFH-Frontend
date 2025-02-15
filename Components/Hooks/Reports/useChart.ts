import { DefaultInputValidate } from "@/Components/Hooks/Common/useValidations"
import { ValidationsType } from "@/Components/Types/Others"
import { useAddChartAxisMutation, useAddReportBaseDataMutation, useAddReportChartDataMutation, useGetFormDropdownsQuery,  } from "@/redux/api/reportsApi"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "react-toastify"

const baseChartForm = {
    name:'',
    connection:'',
    chart_type:'',
    query:'',
    width:'',
    x_axis:'',
    y_axes:[]
}
export interface ChartFormType{
    name        :string
    connection  :string
    chart_type  :string
    query       :string
    width       :string
    report_id?  :string
    chart_id?   :string
    x_axis      :string
    y_axes      :string[]
}

export const useChartsForm = ({dept_name, report_id}:{dept_name:string, report_id?:string}) =>{
    const [form, setForm]               = useState<ChartFormType>(baseChartForm)
    const [formErrors, setFormErrors]   = useState<any>()
    const [step, setStep]               = useState<number>(1)
    const router                        = useRouter()
    
    const {data:dropdowns}              = useGetFormDropdownsQuery(undefined)
    // const [addReport]                   = useAddReportMutation()
    const [addReportBaseData]           = useAddReportBaseDataMutation()
    const [addReportChartData]          = useAddReportChartDataMutation()
    const [addChartAxis]                = useAddChartAxisMutation()


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
                setStep(2)

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
                setForm({...form, chart_id:res?.id})
                setStep(3)
            }).catch(err=>{
                console.log(err?.data);
            })

    }


    const submitAxisData = (e:FormEvent) =>{
        e.preventDefault()
        const formData = new FormData()
        
        if(!form.x_axis || !form.y_axes?.length)
        {
            toast.error('please select a valid dims for the chart')
            return

        }
        formData.append('x', form.x_axis)

        for(let col of form.y_axes)
            formData.append('y', col)

        if(form?.chart_id)
            addChartAxis({chart_id:form?.chart_id, form:formData})
            .unwrap()
            .then(res=>{
                toast.success(res?.message)
                router.push('/departments/human-resources/manage/charts')
            })
            .catch(err=>{
                console.log(err);
            })
    }
        

    

    

return {
        form,
        formErrors,
        onChange,
        selectChange,
        setFormErrors,
        getAsFormData,
        dropdowns,
        step,
        submitBaseData,
        submitChartData,
        submitAxisData,
        // submitAllChartData,
        setForm
    }
}