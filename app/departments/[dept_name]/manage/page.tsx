import Breadcrumb from '@/Components/Common/Breadcrumb'
import { useGetFormDepartmentDetailsQuery } from '@/redux/api/departmentsApi'
import React from 'react'
import MainData from './_Components/MainData'

const page = () => {
  return (
    <div className='px-4'>
      <Breadcrumb />

      <MainData/>
    </div>
  )
}

export default page
