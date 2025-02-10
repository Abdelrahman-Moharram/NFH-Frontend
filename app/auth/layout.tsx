'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'
import Cookies from "js-cookie"

interface Props{
    children: React.ReactNode
}
const layout = ({children}:Props) => {
  const searchParams = useSearchParams()
  const next = searchParams.get('next')
  
  const router = useRouter();
  useEffect(() => {   
    if (Cookies.get('access_token')) {
      if (next?.includes('login'))
        return router.push('/');
      return router.push(next || '/');
    }
  }, [Cookies.get('access_token')]);
  return (
    children
  )
}

export default layout
