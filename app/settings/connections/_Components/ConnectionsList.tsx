'use client'
import OverLay from '@/Components/Modals/OverLay'
import { DeleteIcon, EditIcon } from '@/Components/Shared/SharedIcons'
import DataTable from '@/Components/Tables/DataTable'
import { useGetConnectionsListQuery } from '@/redux/api/connectionsApi'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import ConnectionForm from './ConnectionForm'
import ConnectionFormOverlay from './ConnectionFormOverlay'
import Button from '@/Components/Common/Button'
import { CgAdd } from 'react-icons/cg'

const ConnectionsList = () => {
  const {data, isLoading} = useGetConnectionsListQuery(undefined)
  const [connectionId, setConnectionId] = useState('')

  const [showOverLay, setShowOverLay] = useState(false)
  const handleOverLay = () =>{
    if(connectionId)
      setConnectionId('')
    setShowOverLay(!showOverLay)
  }

  const pathName = usePathname()
  const options = (row:any)=>(
      <div className='flex gap-4 items-start'>
        {/* <button onClick={()=>{handleOverLay();setConnectionId(row?.id)}} className='text-md transition-all rounded-full' title='Edit'> <EditIcon /> </button> */}
        <button onClick={()=>{handleOverLay();setConnectionId(row?.id)}} className='text-md transition-all rounded-full' title='Delete'> <DeleteIcon /> </button>
      </div>
  )
  return (
    <>
      <div className="flex justify-end">
        <Button
          className='px-12 py-2 w-[200px] rounded-sm bg-primary text-negative-color'
          onClick={handleOverLay}
          title='Add'
          isLoading={false}
          icon={<CgAdd />}
        />
      </div>
      <ConnectionFormOverlay 
        connectionId={connectionId}
        handleOverLay={handleOverLay}
        showOverLay={showOverLay}
      />
      <div className='my-8'>
        <DataTable
          data={data?.connections}
          isLoading={isLoading}
          emptyText='No DB Connections added yet'
          emptyLinkHref={pathName}
          fnKeys={['id']}
          isOptions
          options={options}
        />
      </div>
    </>
  )
}

export default ConnectionsList
