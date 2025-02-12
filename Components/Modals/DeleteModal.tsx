import React from 'react'
import BaseModal from './BaseModal'
import { FaTrash } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { Spinner } from '../Common';

interface Props{
    open: boolean
    handleClose:()=>void;
    children: React.ReactNode;
    deleteAction: (id:string)=>void;
    isLoading:boolean,
    id: string,
    title: string
}

const DeleteModal = ({title, open, handleClose, children, deleteAction, isLoading, id}:Props) => {
  return (
    <BaseModal open={open} handleToggler={handleClose}  >
        <div className="min-w-[50vw] flex justify-between items-center ">
            <h3 className='font-bold'>{title}</h3>
            <div onClick={handleClose} className="cursor-pointer p-3 rounded-full hover:bg-gray-100"><IoClose /></div>
        </div>
        <p className="text-red-500 my-4">
            {children}
        </p>
        <button
            onClick={()=>deleteAction(id)}
            className="w-full justify-center flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-red-500 bg-red-100 hover:bg-red-500 hover:text-white"
        >
            
            {isLoading ?  
                <div className='flex items-center gap-1'>
                    <Spinner sm /> 
                    Delete
                </div>
            : 
            <>
                <FaTrash />
                Delete
            </>
            }
        </button>
    </BaseModal>
  )
}

export default DeleteModal
