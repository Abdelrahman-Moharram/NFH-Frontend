import React from 'react'
import ReportChartList from '../_Components/DepartmentReportList'
import Link from 'next/link'
import { BiPlus } from 'react-icons/bi'

const page = () => {
  
  return (
    <div>
      <div className="flex justify-end my-3">
        <Link
          className="group rounded-md relative inline-flex items-center overflow-hidden bg-blue-600 px-8 py-3 text-white focus:ring-3 focus:outline-hidden"
          href="charts/add"
        >
          <span className="text-sm font-medium transition-all group-hover:me-4"> Create New </span>
          <span className="absolute -end-full transition-all group-hover:end-4">
            <BiPlus/>
          </span>
        </Link>
      </div>

      <ReportChartList />
    </div>
  )
}

export default page
