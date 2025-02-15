import Breadcrumb from '@/Components/Common/Breadcrumb'
import React from 'react'
import ConnectionsList from './_Components/ConnectionsList'

const page = () => {
  return (
    <div className='p-5'>
      <Breadcrumb />
      <ConnectionsList />
    </div>
  )
}

export default page
