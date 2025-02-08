import React from 'react'
import ManagementTabs from './_Components/ManagementTabs'

const layout = ({children}:{children:React.ReactNode}) => {
    
  return (
    <div className="p-5 ">
      <h1 className='font-bold text-2xl mb-8'>Manage Department</h1>

      <ManagementTabs />
      
      {children}
    </div>
  )
}

export default layout