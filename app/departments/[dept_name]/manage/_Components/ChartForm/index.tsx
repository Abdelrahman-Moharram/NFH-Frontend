'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Stepper from '@/Components/Common/Stepper'
import MainData from './MainData'
import Initial from './Initial'
import { ChartFormType, useChartsForm } from '../../../../../../Components/Hooks/Reports/useChart'
import { ValidationsType } from '@/Components/Types/Others'
import { useParams } from 'next/navigation'
import SelectCols from './SelectCols'

export interface SharedProps{
    form            :   ChartFormType,
    formErrors      :   any,
    onChange        :   (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, validationSchema?:ValidationsType )=>void,
    selectChange    :   (e: ChangeEvent<HTMLSelectElement>,  validationSchema?:ValidationsType)=>void,
    dropdowns       :   any
    currentStep     :   number
    onSubmit        :   (e:FormEvent)=>void,
}

const ChartForm = () => {
    const {dept_name}:{dept_name:string} = useParams()


    
    const {
        form,
        formErrors,
        onChange,
        selectChange,
        dropdowns,
        submitBaseData,
        submitChartData,
        submitAxisData,
        setForm,
        step,
    } = useChartsForm({dept_name})

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
                        onSubmit={submitAxisData}
                        currentStep={step}
                        setForm={setForm}
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
