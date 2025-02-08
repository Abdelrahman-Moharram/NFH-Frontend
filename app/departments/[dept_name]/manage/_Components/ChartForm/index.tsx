'use client'
import React, { ChangeEvent, FormEvent, useCallback } from 'react'
import Stepper from '@/Components/Common/Stepper'
import MainData from './MainData'
import Initial from './Initial'
import { ChartFormType, useChartsForm } from '../../../../../../Components/Hooks/Reports/useChart'
import { ValidationsType } from '@/Components/Types/Others'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import { to_int_or_default } from '@/Components/utils/helper'
import SelectCols from './SelectCols'

export interface SharedProps{
    form            :   ChartFormType,
    formErrors      :   any,
    onChange        :   (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, validationSchema?:ValidationsType )=>void,
    selectChange    :   (e: ChangeEvent<HTMLSelectElement>,  validationSchema?:ValidationsType)=>void,
    dropdowns       :   any
    currentStep     :   number
    onSubmit        :   (e:FormEvent)=>void
}

const ChartForm = () => {
    const {dept_name}:{dept_name:string} = useParams()
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const step = to_int_or_default(searchParams.get("step")) 

    if(!step){
        router.push(pathName + '?step=1')
    }
    const {
        form,
        formErrors,
        onChange,
        selectChange,
        dropdowns,
        submitBaseData,
        submitChartData
    } = useChartsForm({dept_name, step})

    const Steps = [
        {
            number: 1, 
            name: 'Initial Data', 
            is_done: false,
            component:<Initial 
                        form={form}
                        formErrors={formErrors}
                        onChange={onChange}
                        selectChange={selectChange}
                        dropdowns={dropdowns} 
                        currentStep={step}
                        onSubmit={submitBaseData}
                    />
        },
        {
            number: 2, 
            name: 'Core Data', 
            is_done: false,
            component:<MainData 
                        form={form}
                        formErrors={formErrors}
                        onChange={onChange}
                        selectChange={selectChange}
                        dropdowns={dropdowns} 
                        currentStep={step}
                        onSubmit={submitChartData}
                    />
        },
        {
            number: 3, 
            name: 'Finish', 
            is_done: false,
            component:<SelectCols
                        form={form}
                        formErrors={formErrors}
                        onChange={onChange}
                        selectChange={selectChange}
                        dropdowns={dropdowns} 
                        currentStep={step}
                        onSubmit={submitChartData}
                    />
        },
        
    ]
    
    return (
    <div>
        <Stepper
            steps={Steps}
            currentStep={step}
        />
    </div>
    )
}

export default ChartForm
