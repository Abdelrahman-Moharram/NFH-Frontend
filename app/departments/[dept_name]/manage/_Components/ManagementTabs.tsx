'use client'
import Tabs from '@/Components/Common/Tabs'
import { useParams } from 'next/navigation'
import React from 'react'


const ManagementTabs = () => {
  const {dept_name} = useParams()
  const tabs = [
    {title:'Main Data', href:`/departments/${dept_name}/manage/main-data`},
    {title:'Charts', href:`/departments/${dept_name}/manage/charts`, },
  ]    
  return (
    <div className=''>
      <Tabs 
        tabs={tabs}
      />
    </div>
  )
}

export default ManagementTabs