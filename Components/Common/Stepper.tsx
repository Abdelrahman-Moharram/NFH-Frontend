import React, { useState } from 'react'
import StepsItem from './StepItem'

const Stepper = ({steps, currentStep}:{steps:Step[], currentStep:number}) => {
    

  return (
    <div className='my-5 min-h-[70vh] shadow-xl p-12 border rounded-lg relative'>
        <h2 className="sr-only">Steps</h2>

        <div
            className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100 bg-container default-shadow shadow-inner rounded-lg overflow-hidden px-4"
        >
            <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
                {
                    steps?.map(step=>(
                        <StepsItem
                            is_done={currentStep > step.number}
                            name={step.name}
                            number={step.number}
                            key={step.number}
                            is_current={currentStep == step.number}
                        />
                    ))
                }
            </ol>
        </div>
        {
            steps[currentStep-1]?.component
        }
    </div>
  )
}

export default Stepper
