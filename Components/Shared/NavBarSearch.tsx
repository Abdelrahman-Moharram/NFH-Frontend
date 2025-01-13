'use client'
import React, { ChangeEvent, useState } from 'react'
import { ImageSkeleton } from '../Common'
import { IoMdCloseCircle } from 'react-icons/io'

const NavBarSearch = () => {
    const [searchValue, setSearchValue] = useState('')
    const [modalCaseNumber, setModalCaseNumber] = useState('')
    const [modal, setModal] = useState(false)
    const handleSearchValue = (e:ChangeEvent<HTMLInputElement>) =>{
        setSearchValue(e.target.value)
    }
    const handleDetailsModal = () =>{
        setModal(!modal)
    }
    const handleCaseNumber = (case_number:string|null) =>{
        if(case_number){
            setModalCaseNumber(case_number)
            setModal(true)
        }else{
            setModalCaseNumber('')
            setModal(false)
        }
    }

    
  return (
    <>
        <div className="w-[60%] relative">
            {/* <div className="flex">
                <input
                    className='w-full py-2 px-5 bg-card outline-none border-none rounded-lg'
                    placeholder='ابحث برقم العميل أو القضية أو رقم الهوية أو رقم الجوال'
                    value={searchValue}
                    onChange={handleSearchValue}
                />
                
            </div> */}
           
        </div>
    </>
  )
}

export default NavBarSearch
