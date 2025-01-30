'use client'
import DepartmentForm from '@/app/departments/_Components/DepartmentForm'
import ToggledCard from '@/Components/Cards/ToggledCard'
import { useParams } from 'next/navigation'
import React from 'react'

const MainData = () => {
    const {dept_name}:{dept_name:string} = useParams()
    
  return (
  <div>
    <ToggledCard
      title='Main Data'
    >
      <DepartmentForm
        dept_name={dept_name} 
      />
    </ToggledCard>
  </div>
  )
}

export default MainData
