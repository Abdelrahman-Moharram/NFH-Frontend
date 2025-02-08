import React from 'react'


const StepsItem = ({name, number, is_done, is_current}:Step) => {
  return (
    <li className="flex items-center gap-2 bg-container p-1">
        <span
            className={`size-6 rounded-full text-center text-[10px]/6 font-bold ${is_done?'bg-primary  text-white':is_current?'bg-secondary text-white':'bg-gray-100'}`}
        >
            {number}
        </span>

        <span className="hidden sm:block"> {name} </span>
    </li>
  )
}

export default StepsItem