import { LoginForm } from '@/Components/Forms'
import { FullLogoDark } from '@/Components/utils/Icons'
import React from 'react'

const page = () => {
    
    
    
    
  return (
    <main className="flex  justify-center items-center min-h-screen bg-login-image bg-cover bg-bottom">
        <div className="rounded-lg w-fit h-fit bg-container py-20 drop-shadow-2xl login-container px-12">
            <div className="text-center mb-12">
                <h1 className='text-[36px] mb-4 font-[800]'>
                    NFH DASHBOARD
                </h1>
                <div className='mb-0 font-semibold'>
                    Welcome,
                </div>
                <p className='text-[36px] mt-0 mb-2 text-primary font-[800]'>
                    Login to your Account
                </p>
            </div>
            <div className="mx-auto w-[540px]">
                {/* <h4 className='my-5 text-[36px] font-[600]'>
                    Dashboard Login
                </h4> */}
                <LoginForm />
            </div>
            <div className="flex justify-center mt-10">
                <FullLogoDark />
            </div>
        </div>
    </main>
  )
}

export default page
