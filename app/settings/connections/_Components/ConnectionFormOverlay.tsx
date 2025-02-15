import OverLay from '@/Components/Modals/OverLay'
import React from 'react'
import ConnectionForm from './ConnectionForm'

interface Props{
    connectionId    :   string, 
    showOverLay     :   boolean, 
    handleOverLay   :   ()=>void
}
const ConnectionFormOverlay = ({connectionId, showOverLay, handleOverLay}:Props) => {
  return (
    <OverLay 
        handleOpen={handleOverLay}
        open={showOverLay}
        title={`${connectionId?'Edit':'Add'} Connection`}
    >
        <ConnectionForm connection_id={connectionId} show={showOverLay} handleShow={handleOverLay} />
    </OverLay>
  )
}

export default ConnectionFormOverlay
