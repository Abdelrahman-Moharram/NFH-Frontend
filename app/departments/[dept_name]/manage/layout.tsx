import React from 'react'
import ManagementTabs from './_Components/ManagementTabs'
import Breadcrumb from '@/Components/Common/Breadcrumb'

const layout = ({children}:{children:React.ReactNode}) => {
    
  return (
    <div className="p-5 ">
      <div className="mb-12">
        <Breadcrumb />
      </div>
      <h1 className='font-bold text-2xl mb-8'>Manage Department</h1>
      <ManagementTabs />
      {children}
    </div>
  )
}

export default layout