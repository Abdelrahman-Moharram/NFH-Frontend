import DepartmentForm from '@/app/departments/_Components/DepartmentForm'
import Breadcrumb from '@/Components/Common/Breadcrumb'
import React from 'react'

const page = () => {
  return (
    <div className='px-4'>
      <Breadcrumb />

      <DepartmentForm />
    </div>
  )
}

export default page
